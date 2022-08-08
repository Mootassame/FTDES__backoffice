import CategoryPublicationService from 'src/modules/categoryPublication/categoryPublicationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CATEGORYPUBLICATION_FORM';

const categoryPublicationFormActions = {
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
        type: categoryPublicationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CategoryPublicationService.find(id);
      }

      dispatch({
        type: categoryPublicationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryPublicationFormActions.INIT_ERROR,
      });

      getHistory().push('/category-publication');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: categoryPublicationFormActions.CREATE_STARTED,
      });

      await CategoryPublicationService.create(values);

      dispatch({
        type: categoryPublicationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.categoryPublication.create.success'),
      );

      getHistory().push('/category-publication');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryPublicationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: categoryPublicationFormActions.UPDATE_STARTED,
      });

      await CategoryPublicationService.update(id, values);

      dispatch({
        type: categoryPublicationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.categoryPublication.update.success'),
      );

      getHistory().push('/category-publication');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryPublicationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default categoryPublicationFormActions;
