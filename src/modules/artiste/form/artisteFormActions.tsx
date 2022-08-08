import ArtisteService from 'src/modules/artiste/artisteService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ARTISTE_FORM';

const artisteFormActions = {
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
        type: artisteFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ArtisteService.find(id);
      }

      dispatch({
        type: artisteFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: artisteFormActions.INIT_ERROR,
      });

      getHistory().push('/artiste');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: artisteFormActions.CREATE_STARTED,
      });

      await ArtisteService.create(values);

      dispatch({
        type: artisteFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.artiste.create.success'),
      );

      getHistory().push('/artiste');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: artisteFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: artisteFormActions.UPDATE_STARTED,
      });

      await ArtisteService.update(id, values);

      dispatch({
        type: artisteFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.artiste.update.success'),
      );

      getHistory().push('/artiste');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: artisteFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default artisteFormActions;
