import ViolenceService from 'src/modules/violence/violenceService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'VIOLENCE_FORM';

const violenceFormActions = {
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
        type: violenceFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ViolenceService.find(id);
      }

      dispatch({
        type: violenceFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: violenceFormActions.INIT_ERROR,
      });

      getHistory().push('/violence');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: violenceFormActions.CREATE_STARTED,
      });

      await ViolenceService.create(values);

      dispatch({
        type: violenceFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.violence.create.success'),
      );

      getHistory().push('/violence');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: violenceFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: violenceFormActions.UPDATE_STARTED,
      });

      await ViolenceService.update(id, values);

      dispatch({
        type: violenceFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.violence.update.success'),
      );

      getHistory().push('/violence');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: violenceFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default violenceFormActions;
