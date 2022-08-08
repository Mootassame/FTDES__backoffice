import listActions from 'src/modules/forum/list/forumListActions';
import ForumService from 'src/modules/forum/forumService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'FORUM_DESTROY';

const forumDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: forumDestroyActions.DESTROY_STARTED,
      });

      await ForumService.destroyAll([id]);

      dispatch({
        type: forumDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.forum.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/forum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: forumDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: forumDestroyActions.DESTROY_ALL_STARTED,
      });

      await ForumService.destroyAll(ids);

      dispatch({
        type: forumDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.forum.destroyAll.success'),
      );

      getHistory().push('/forum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: forumDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default forumDestroyActions;
