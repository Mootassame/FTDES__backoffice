import listActions from 'src/modules/domaine/list/domaineListActions';
import DomaineService from 'src/modules/domaine/domaineService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ARTISTE_DESTROY';

const domaineDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: domaineDestroyActions.DESTROY_STARTED,
      });

      await DomaineService.destroyAll([id]);

      dispatch({
        type: domaineDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.domaine.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/domaine');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: domaineDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: domaineDestroyActions.DESTROY_ALL_STARTED,
      });

      await DomaineService.destroyAll(ids);

      dispatch({
        type: domaineDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.domaine.destroyAll.success'),
      );

      getHistory().push('/domaine');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: domaineDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default domaineDestroyActions;
