import TagsService from 'src/modules/tags/tagsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TAGS_VIEW';

const tagsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tagsViewActions.FIND_STARTED,
      });

      const record = await TagsService.find(id);

      dispatch({
        type: tagsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tagsViewActions.FIND_ERROR,
      });

      getHistory().push('/tags');
    }
  },
};

export default tagsViewActions;
