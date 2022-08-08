import EvenementService from 'src/modules/evenement/evenementService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EVENEMENT_VIEW';

const evenementViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: evenementViewActions.FIND_STARTED,
      });

      const record = await EvenementService.find(id);

      dispatch({
        type: evenementViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: evenementViewActions.FIND_ERROR,
      });

      getHistory().push('/evenement');
    }
  },
};

export default evenementViewActions;
