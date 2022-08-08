import ThematiqueService from 'src/modules/thematique/thematiqueService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'THEMATIQUE_VIEW';

const thematiqueViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: thematiqueViewActions.FIND_STARTED,
      });

      const record = await ThematiqueService.find(id);

      dispatch({
        type: thematiqueViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: thematiqueViewActions.FIND_ERROR,
      });

      getHistory().push('/thematique');
    }
  },
};

export default thematiqueViewActions;
