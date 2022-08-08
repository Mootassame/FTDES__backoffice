import listActions from 'src/modules/tags/list/tagsListActions';
import TagsService from 'src/modules/tags/tagsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TAGS_DESTROY';

const tagsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tagsDestroyActions.DESTROY_STARTED,
      });

      await TagsService.destroyAll([id]);

      dispatch({
        type: tagsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.tags.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/tags');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: tagsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: tagsDestroyActions.DESTROY_ALL_STARTED,
      });

      await TagsService.destroyAll(ids);

      dispatch({
        type: tagsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.tags.destroyAll.success'),
      );

      getHistory().push('/tags');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: tagsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default tagsDestroyActions;
