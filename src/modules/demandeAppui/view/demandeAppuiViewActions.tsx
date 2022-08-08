import DemandeAppuiService from 'src/modules/demandeAppui/demandeAppuiService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DEMANDEAPPUI_VIEW';

const demandeAppuiViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: demandeAppuiViewActions.FIND_STARTED,
      });

      const record = await DemandeAppuiService.find(id);

      dispatch({
        type: demandeAppuiViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: demandeAppuiViewActions.FIND_ERROR,
      });

      getHistory().push('/demande-appui');
    }
  },
};

export default demandeAppuiViewActions;
