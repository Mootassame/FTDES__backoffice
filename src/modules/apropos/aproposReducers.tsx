import list from 'src/modules/apropos/list/aproposListReducers';
import form from 'src/modules/apropos/form/aproposFormReducers';
import view from 'src/modules/apropos/view/aproposViewReducers';
import destroy from 'src/modules/apropos/destroy/aproposDestroyReducers';
import importerReducer from 'src/modules/apropos/importer/aproposImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
