import PublicationService from 'src/modules/publication/publicationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PUBLICATION_VIEW';

const publicationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: publicationViewActions.FIND_STARTED,
      });

      const record = await PublicationService.find(id);

      dispatch({
        type: publicationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: publicationViewActions.FIND_ERROR,
      });

      getHistory().push('/publication');
    }
  },
};

export default publicationViewActions;
