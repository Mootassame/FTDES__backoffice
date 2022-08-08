import CategoryPublicationService from 'src/modules/categoryPublication/categoryPublicationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CATEGORYPUBLICATION_VIEW';

const categoryPublicationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoryPublicationViewActions.FIND_STARTED,
      });

      const record = await CategoryPublicationService.find(id);

      dispatch({
        type: categoryPublicationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryPublicationViewActions.FIND_ERROR,
      });

      getHistory().push('/category-publication');
    }
  },
};

export default categoryPublicationViewActions;
