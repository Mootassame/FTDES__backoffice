import ActionService from 'src/modules/action/actionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ACTION_FORM';

const actionFormActions = {
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
        type: actionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ActionService.find(id);
      }

      dispatch({
        type: actionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actionFormActions.INIT_ERROR,
      });

      getHistory().push('/action');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: actionFormActions.CREATE_STARTED,
      });

      await ActionService.create(values);

      dispatch({
        type: actionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.action.create.success'),
      );

      getHistory().goBack();
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: actionFormActions.UPDATE_STARTED,
      });

      await ActionService.update(id, values);

      dispatch({
        type: actionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.action.update.success'),
      );

      getHistory().goBack();
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default actionFormActions;
