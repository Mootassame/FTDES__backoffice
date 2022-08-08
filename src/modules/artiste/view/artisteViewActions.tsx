import ArtisteService from 'src/modules/artiste/artisteService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ARTISTE_VIEW';

const artisteViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: artisteViewActions.FIND_STARTED,
      });

      const record = await ArtisteService.find(id);

      dispatch({
        type: artisteViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: artisteViewActions.FIND_ERROR,
      });

      getHistory().push('/artiste');
    }
  },
};

export default artisteViewActions;
