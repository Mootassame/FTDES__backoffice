import list from 'src/modules/forum/list/forumListReducers';
import form from 'src/modules/forum/form/forumFormReducers';
import view from 'src/modules/forum/view/forumViewReducers';
import destroy from 'src/modules/forum/destroy/forumDestroyReducers';
import importerReducer from 'src/modules/forum/importer/forumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
