import list from 'src/modules/mouvement/list/mouvementListReducers';
import form from 'src/modules/mouvement/form/mouvementFormReducers';
import view from 'src/modules/mouvement/view/mouvementViewReducers';
import destroy from 'src/modules/mouvement/destroy/mouvementDestroyReducers';
import importerReducer from 'src/modules/mouvement/importer/mouvementImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
