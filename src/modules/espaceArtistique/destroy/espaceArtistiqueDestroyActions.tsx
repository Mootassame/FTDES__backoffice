import listActions from 'src/modules/espaceArtistique/list/espaceArtistiqueListActions';
import EspaceArtistiqueService from 'src/modules/espaceArtistique/espaceArtistiqueService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ESPACEARTISTIQUE_DESTROY';

const espaceArtistiqueDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: espaceArtistiqueDestroyActions.DESTROY_STARTED,
      });

      await EspaceArtistiqueService.destroyAll([id]);

      dispatch({
        type: espaceArtistiqueDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.espaceArtistique.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/espace-artistique');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: espaceArtistiqueDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: espaceArtistiqueDestroyActions.DESTROY_ALL_STARTED,
      });

      await EspaceArtistiqueService.destroyAll(ids);

      dispatch({
        type: espaceArtistiqueDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.espaceArtistique.destroyAll.success'),
      );

      getHistory().push('/espace-artistique');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: espaceArtistiqueDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default espaceArtistiqueDestroyActions;
