import CategoryEvenementService from 'src/modules/categoryEvenement/categoryEvenementService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CATEGORYREPORT_VIEW';

const categoryEvenementViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoryEvenementViewActions.FIND_STARTED,
      });

      const record = await CategoryEvenementService.find(
        id,
      );

      dispatch({
        type: categoryEvenementViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryEvenementViewActions.FIND_ERROR,
      });

      getHistory().push('/category-evenement');
    }
  },
};

export default categoryEvenementViewActions;
