import MediatiqueService from 'src/modules/mediatique/mediatiqueService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MEDIATIQUE_VIEW';

const mediatiqueViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mediatiqueViewActions.FIND_STARTED,
      });

      const record = await MediatiqueService.find(id);

      dispatch({
        type: mediatiqueViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mediatiqueViewActions.FIND_ERROR,
      });

      getHistory().push('/mediatique');
    }
  },
};

export default mediatiqueViewActions;
