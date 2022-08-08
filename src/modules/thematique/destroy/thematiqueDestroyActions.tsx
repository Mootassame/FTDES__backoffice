import listActions from 'src/modules/thematique/list/thematiqueListActions';
import ThematiqueService from 'src/modules/thematique/thematiqueService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'THEMATIQUE_DESTROY';

const thematiqueDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: thematiqueDestroyActions.DESTROY_STARTED,
      });

      await ThematiqueService.destroyAll([id]);

      dispatch({
        type: thematiqueDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.thematique.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/thematique');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: thematiqueDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: thematiqueDestroyActions.DESTROY_ALL_STARTED,
      });

      await ThematiqueService.destroyAll(ids);

      dispatch({
        type: thematiqueDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.thematique.destroyAll.success'),
      );

      getHistory().push('/thematique');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: thematiqueDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default thematiqueDestroyActions;
