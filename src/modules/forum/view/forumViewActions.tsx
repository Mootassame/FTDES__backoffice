import ForumService from 'src/modules/forum/forumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'FORUM_VIEW';

const forumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: forumViewActions.FIND_STARTED,
      });

      const record = await ForumService.find(id);

      dispatch({
        type: forumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: forumViewActions.FIND_ERROR,
      });

      getHistory().push('/forum');
    }
  },
};

export default forumViewActions;
