import SuicideService from 'src/modules/suicide/suicideService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SUICIDE_VIEW';

const suicideViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: suicideViewActions.FIND_STARTED,
      });

      const record = await SuicideService.find(id);

      dispatch({
        type: suicideViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: suicideViewActions.FIND_ERROR,
      });

      getHistory().push('/suicide');
    }
  },
};

export default suicideViewActions;
