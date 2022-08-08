import AproposService from 'src/modules/apropos/aproposService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'APROPOS_FORM';

const aproposFormActions = {
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
        type: aproposFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AproposService.find(id);
      }

      dispatch({
        type: aproposFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: aproposFormActions.INIT_ERROR,
      });

      getHistory().push('/');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: aproposFormActions.CREATE_STARTED,
      });

      await AproposService.create(values);

      dispatch({
        type: aproposFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.apropos.create.success'),
      );

      getHistory().push('/');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: aproposFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: aproposFormActions.UPDATE_STARTED,
      });

      await AproposService.update(id, values);

      dispatch({
        type: aproposFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.apropos.update.success'),
      );

      getHistory().push('/');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: aproposFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default aproposFormActions;
