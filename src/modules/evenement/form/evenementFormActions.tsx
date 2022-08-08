import EvenementService from 'src/modules/evenement/evenementService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EVENEMENT_FORM';

const evenementFormActions = {
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
        type: evenementFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await EvenementService.find(id);
      }

      dispatch({
        type: evenementFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: evenementFormActions.INIT_ERROR,
      });

      getHistory().push('/evenement');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: evenementFormActions.CREATE_STARTED,
      });

      await EvenementService.create(values);

      dispatch({
        type: evenementFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.evenement.create.success'),
      );

      getHistory().push('/evenement');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: evenementFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: evenementFormActions.UPDATE_STARTED,
      });

      await EvenementService.update(id, values);

      dispatch({
        type: evenementFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.evenement.update.success'),
      );

      getHistory().push('/evenement');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: evenementFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default evenementFormActions;
