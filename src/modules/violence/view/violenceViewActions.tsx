import ViolenceService from 'src/modules/violence/violenceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'VIOLENCE_VIEW';

const violenceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: violenceViewActions.FIND_STARTED,
      });

      const record = await ViolenceService.find(id);

      dispatch({
        type: violenceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: violenceViewActions.FIND_ERROR,
      });

      getHistory().push('/violence');
    }
  },
};

export default violenceViewActions;
