import DemandeAppuiService from 'src/modules/demandeAppui/demandeAppuiService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DEMANDEAPPUI_FORM';

const demandeAppuiFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: demandeAppuiFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DemandeAppuiService.find(id);
      }

      dispatch({
        type: demandeAppuiFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: demandeAppuiFormActions.INIT_ERROR,
      });

      getHistory().push('/demande-appui');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: demandeAppuiFormActions.CREATE_STARTED,
      });

      await DemandeAppuiService.create(values);

      dispatch({
        type: demandeAppuiFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.demandeAppui.create.success'),
      );

      getHistory().push('/demande-appui');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: demandeAppuiFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: demandeAppuiFormActions.UPDATE_STARTED,
      });

      await DemandeAppuiService.update(id, values);

      dispatch({
        type: demandeAppuiFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.demandeAppui.update.success'),
      );

      getHistory().push('/demande-appui');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: demandeAppuiFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default demandeAppuiFormActions;
