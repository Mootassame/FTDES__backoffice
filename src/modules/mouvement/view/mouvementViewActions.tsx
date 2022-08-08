import MouvementService from 'src/modules/mouvement/mouvementService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MOUVEMENT_VIEW';

const mouvementViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mouvementViewActions.FIND_STARTED,
      });

      const record = await MouvementService.find(id);

      dispatch({
        type: mouvementViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mouvementViewActions.FIND_ERROR,
      });

      getHistory().push('/mouvement');
    }
  },
};

export default mouvementViewActions;
