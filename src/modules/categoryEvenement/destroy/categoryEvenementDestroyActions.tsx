import listActions from 'src/modules/categoryEvenement/list/categoryEvenementListActions';
import CategoryEvenementService from 'src/modules/categoryEvenement/categoryEvenementService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CATEGORYREPORT_DESTROY';

const categoryEvenementDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoryEvenementDestroyActions.DESTROY_STARTED,
      });

      await CategoryEvenementService.destroyAll([id]);

      dispatch({
        type: categoryEvenementDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.categoryEvenement.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/category-evenement');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: categoryEvenementDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: categoryEvenementDestroyActions.DESTROY_ALL_STARTED,
      });

      await CategoryEvenementService.destroyAll(ids);

      dispatch({
        type: categoryEvenementDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n(
          'entities.categoryEvenement.destroyAll.success',
        ),
      );

      getHistory().push('/category-evenement');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: categoryEvenementDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default categoryEvenementDestroyActions;
