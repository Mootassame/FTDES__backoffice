import listActions from 'src/modules/evenement/list/evenementListActions';
import EvenementService from 'src/modules/evenement/evenementService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EVENEMENT_DESTROY';

const evenementDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: evenementDestroyActions.DESTROY_STARTED,
      });

      await EvenementService.destroyAll([id]);

      dispatch({
        type: evenementDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.evenement.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/evenement');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: evenementDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: evenementDestroyActions.DESTROY_ALL_STARTED,
      });

      await EvenementService.destroyAll(ids);

      dispatch({
        type: evenementDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.evenement.destroyAll.success'),
      );

      getHistory().push('/evenement');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: evenementDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default evenementDestroyActions;
