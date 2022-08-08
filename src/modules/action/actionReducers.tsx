import list from 'src/modules/action/list/actionListReducers';
import form from 'src/modules/action/form/actionFormReducers';
import view from 'src/modules/action/view/actionViewReducers';
import destroy from 'src/modules/action/destroy/actionDestroyReducers';
import importerReducer from 'src/modules/action/importer/actionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
