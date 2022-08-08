import list from 'src/modules/tags/list/tagsListReducers';
import form from 'src/modules/tags/form/tagsFormReducers';
import view from 'src/modules/tags/view/tagsViewReducers';
import destroy from 'src/modules/tags/destroy/tagsDestroyReducers';
import importerReducer from 'src/modules/tags/importer/tagsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
