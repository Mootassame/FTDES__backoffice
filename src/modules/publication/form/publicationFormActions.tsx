import PublicationService from 'src/modules/publication/publicationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PUBLICATION_FORM';

const publicationFormActions = {
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
        type: publicationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PublicationService.find(id);
      }

      dispatch({
        type: publicationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: publicationFormActions.INIT_ERROR,
      });

      getHistory().push('/publication');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: publicationFormActions.CREATE_STARTED,
      });

      await PublicationService.create(values);

      dispatch({
        type: publicationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.publication.create.success'),
      );

      getHistory().push('/publication');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: publicationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: publicationFormActions.UPDATE_STARTED,
      });

      await PublicationService.update(id, values);

      dispatch({
        type: publicationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.publication.update.success'),
      );

      getHistory().push('/publication');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: publicationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default publicationFormActions;
