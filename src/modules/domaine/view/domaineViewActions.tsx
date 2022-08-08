import DomaineService from 'src/modules/domaine/domaineService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ARTISTE_VIEW';

const domaineViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: domaineViewActions.FIND_STARTED,
      });

      const record = await DomaineService.find(id);

      dispatch({
        type: domaineViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: domaineViewActions.FIND_ERROR,
      });

      getHistory().push('/domaine');
    }
  },
};

export default domaineViewActions;
