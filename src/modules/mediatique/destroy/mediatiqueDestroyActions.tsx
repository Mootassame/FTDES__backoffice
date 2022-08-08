import listActions from 'src/modules/mediatique/list/mediatiqueListActions';
import MediatiqueService from 'src/modules/mediatique/mediatiqueService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEDIATIQUE_DESTROY';

const mediatiqueDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mediatiqueDestroyActions.DESTROY_STARTED,
      });

      await MediatiqueService.destroyAll([id]);

      dispatch({
        type: mediatiqueDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.mediatique.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/mediatique');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: mediatiqueDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: mediatiqueDestroyActions.DESTROY_ALL_STARTED,
      });

      await MediatiqueService.destroyAll(ids);

      dispatch({
        type: mediatiqueDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.mediatique.destroyAll.success'),
      );

      getHistory().push('/mediatique');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: mediatiqueDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default mediatiqueDestroyActions;
