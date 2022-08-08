import CategoryAppelService from 'src/modules/categoryAppel/categoryAppelService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CATEGORYREPORT_FORM';

const categoryAppelFormActions = {
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
        type: categoryAppelFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CategoryAppelService.find(id);
      }

      dispatch({
        type: categoryAppelFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryAppelFormActions.INIT_ERROR,
      });

      getHistory().push('/category-appel');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: categoryAppelFormActions.CREATE_STARTED,
      });

      await CategoryAppelService.create(values);

      dispatch({
        type: categoryAppelFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.categoryAppel.create.success'),
      );

      getHistory().push('/category-appel');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryAppelFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: categoryAppelFormActions.UPDATE_STARTED,
      });

      await CategoryAppelService.update(id, values);

      dispatch({
        type: categoryAppelFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.categoryAppel.update.success'),
      );

      getHistory().push('/category-appel');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryAppelFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default categoryAppelFormActions;
