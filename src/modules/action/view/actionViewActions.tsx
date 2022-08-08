import ActionService from 'src/modules/action/actionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ACTION_VIEW';

const actionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: actionViewActions.FIND_STARTED,
      });

      const record = await ActionService.find(id);

      dispatch({
        type: actionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actionViewActions.FIND_ERROR,
      });

      getHistory().push('/action');
    }
  },
};

export default actionViewActions;
