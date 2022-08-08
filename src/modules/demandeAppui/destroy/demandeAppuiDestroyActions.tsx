import listActions from 'src/modules/demandeAppui/list/demandeAppuiListActions';
import DemandeAppuiService from 'src/modules/demandeAppui/demandeAppuiService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DEMANDEAPPUI_DESTROY';

const demandeAppuiDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: demandeAppuiDestroyActions.DESTROY_STARTED,
      });

      await DemandeAppuiService.destroyAll([id]);

      dispatch({
        type: demandeAppuiDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.demandeAppui.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/demande-appui');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: demandeAppuiDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: demandeAppuiDestroyActions.DESTROY_ALL_STARTED,
      });

      await DemandeAppuiService.destroyAll(ids);

      dispatch({
        type: demandeAppuiDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.demandeAppui.destroyAll.success'),
      );

      getHistory().push('/demande-appui');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: demandeAppuiDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default demandeAppuiDestroyActions;
