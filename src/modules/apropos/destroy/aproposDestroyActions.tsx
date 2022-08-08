import listActions from 'src/modules/apropos/list/aproposListActions';
import AproposService from 'src/modules/apropos/aproposService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'APROPOS_DESTROY';

const aproposDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: aproposDestroyActions.DESTROY_STARTED,
      });

      await AproposService.destroyAll([id]);

      dispatch({
        type: aproposDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.apropos.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: aproposDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: aproposDestroyActions.DESTROY_ALL_STARTED,
      });

      await AproposService.destroyAll(ids);

      dispatch({
        type: aproposDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.apropos.destroyAll.success'),
      );

      getHistory().push('/');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: aproposDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default aproposDestroyActions;
