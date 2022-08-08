import ThematiqueService from 'src/modules/thematique/thematiqueService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'THEMATIQUE_FORM';

const thematiqueFormActions = {
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
        type: thematiqueFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ThematiqueService.find(id);
      }

      dispatch({
        type: thematiqueFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: thematiqueFormActions.INIT_ERROR,
      });

      getHistory().push('/thematique');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: thematiqueFormActions.CREATE_STARTED,
      });

      await ThematiqueService.create(values);

      dispatch({
        type: thematiqueFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.thematique.create.success'),
      );

      getHistory().push('/thematique');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: thematiqueFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: thematiqueFormActions.UPDATE_STARTED,
      });

      await ThematiqueService.update(id, values);

      dispatch({
        type: thematiqueFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.thematique.update.success'),
      );

      getHistory().push('/thematique');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: thematiqueFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default thematiqueFormActions;
