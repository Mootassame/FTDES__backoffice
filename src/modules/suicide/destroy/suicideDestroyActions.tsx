import listActions from 'src/modules/suicide/list/suicideListActions';
import SuicideService from 'src/modules/suicide/suicideService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SUICIDE_DESTROY';

const suicideDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: suicideDestroyActions.DESTROY_STARTED,
      });

      await SuicideService.destroyAll([id]);

      dispatch({
        type: suicideDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.suicide.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().goBack();
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: suicideDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: suicideDestroyActions.DESTROY_ALL_STARTED,
      });

      await SuicideService.destroyAll(ids);

      dispatch({
        type: suicideDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.suicide.destroyAll.success'),
      );

      getHistory().goBack();
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: suicideDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default suicideDestroyActions;
