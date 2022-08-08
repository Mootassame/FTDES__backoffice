import listActions from 'src/modules/categoryAppel/list/categoryAppelListActions';
import CategoryAppelService from 'src/modules/categoryAppel/categoryAppelService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CATEGORYREPORT_DESTROY';

const categoryAppelDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoryAppelDestroyActions.DESTROY_STARTED,
      });

      await CategoryAppelService.destroyAll([id]);

      dispatch({
        type: categoryAppelDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.categoryAppel.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/category-appel');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: categoryAppelDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: categoryAppelDestroyActions.DESTROY_ALL_STARTED,
      });

      await CategoryAppelService.destroyAll(ids);

      dispatch({
        type: categoryAppelDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n(
          'entities.categoryAppel.destroyAll.success',
        ),
      );

      getHistory().push('/category-appel');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: categoryAppelDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default categoryAppelDestroyActions;
