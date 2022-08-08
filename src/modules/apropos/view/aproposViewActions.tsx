import AproposService from 'src/modules/apropos/aproposService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'APROPOS_VIEW';

const aproposViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: aproposViewActions.FIND_STARTED,
      });

      const record = await AproposService.find(id);

      dispatch({
        type: aproposViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: aproposViewActions.FIND_ERROR,
      });

      getHistory().push('/');
    }
  },
};

export default aproposViewActions;
