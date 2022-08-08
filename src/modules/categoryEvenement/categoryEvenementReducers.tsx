import list from 'src/modules/categoryEvenement/list/categoryEvenementListReducers';
import form from 'src/modules/categoryEvenement/form/categoryEvenementFormReducers';
import view from 'src/modules/categoryEvenement/view/categoryEvenementViewReducers';
import destroy from 'src/modules/categoryEvenement/destroy/categoryEvenementDestroyReducers';
import importerReducer from 'src/modules/categoryEvenement/importer/categoryEvenementImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
