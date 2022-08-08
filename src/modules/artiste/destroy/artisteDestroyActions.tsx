import listActions from 'src/modules/artiste/list/artisteListActions';
import ArtisteService from 'src/modules/artiste/artisteService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ARTISTE_DESTROY';

const artisteDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: artisteDestroyActions.DESTROY_STARTED,
      });

      await ArtisteService.destroyAll([id]);

      dispatch({
        type: artisteDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.artiste.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/artiste');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: artisteDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: artisteDestroyActions.DESTROY_ALL_STARTED,
      });

      await ArtisteService.destroyAll(ids);

      dispatch({
        type: artisteDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.artiste.destroyAll.success'),
      );

      getHistory().push('/artiste');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: artisteDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default artisteDestroyActions;
