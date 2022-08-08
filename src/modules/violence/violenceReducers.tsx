import list from 'src/modules/violence/list/violenceListReducers';
import form from 'src/modules/violence/form/violenceFormReducers';
import view from 'src/modules/violence/view/violenceViewReducers';
import destroy from 'src/modules/violence/destroy/violenceDestroyReducers';
import importerReducer from 'src/modules/violence/importer/violenceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
