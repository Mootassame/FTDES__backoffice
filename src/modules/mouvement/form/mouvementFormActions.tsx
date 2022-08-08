import MouvementService from 'src/modules/mouvement/mouvementService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MOUVEMENT_FORM';

const mouvementFormActions = {
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
        type: mouvementFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MouvementService.find(id);
      }

      dispatch({
        type: mouvementFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mouvementFormActions.INIT_ERROR,
      });

      getHistory().push('/mouvement');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: mouvementFormActions.CREATE_STARTED,
      });

      await MouvementService.create(values);

      dispatch({
        type: mouvementFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.mouvement.create.success'),
      );

      getHistory().push('/mouvement');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mouvementFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: mouvementFormActions.UPDATE_STARTED,
      });

      await MouvementService.update(id, values);

      dispatch({
        type: mouvementFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.mouvement.update.success'),
      );

      getHistory().push('/mouvement');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mouvementFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default mouvementFormActions;
