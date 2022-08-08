import CategoryAppelService from 'src/modules/categoryAppel/categoryAppelService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CATEGORYREPORT_VIEW';

const categoryAppelViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoryAppelViewActions.FIND_STARTED,
      });

      const record = await CategoryAppelService.find(
        id,
      );

      dispatch({
        type: categoryAppelViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryAppelViewActions.FIND_ERROR,
      });

      getHistory().push('/category-appel');
    }
  },
};

export default categoryAppelViewActions;
