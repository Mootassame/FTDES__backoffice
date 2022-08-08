import EspaceArtistiqueService from 'src/modules/espaceArtistique/espaceArtistiqueService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ESPACEARTISTIQUE_VIEW';

const espaceArtistiqueViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: espaceArtistiqueViewActions.FIND_STARTED,
      });

      const record = await EspaceArtistiqueService.find(id);

      dispatch({
        type: espaceArtistiqueViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: espaceArtistiqueViewActions.FIND_ERROR,
      });

      getHistory().push('/espace-artistique');
    }
  },
};

export default espaceArtistiqueViewActions;
