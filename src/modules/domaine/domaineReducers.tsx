import list from 'src/modules/domaine/list/domaineListReducers';
import form from 'src/modules/domaine/form/domaineFormReducers';
import view from 'src/modules/domaine/view/domaineViewReducers';
import destroy from 'src/modules/domaine/destroy/domaineDestroyReducers';
import importerReducer from 'src/modules/domaine/importer/domaineImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
