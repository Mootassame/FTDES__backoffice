import list from 'src/modules/evenement/list/evenementListReducers';
import form from 'src/modules/evenement/form/evenementFormReducers';
import view from 'src/modules/evenement/view/evenementViewReducers';
import destroy from 'src/modules/evenement/destroy/evenementDestroyReducers';
import importerReducer from 'src/modules/evenement/importer/evenementImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
