import list from 'src/modules/categoryPublication/list/categoryPublicationListReducers';
import form from 'src/modules/categoryPublication/form/categoryPublicationFormReducers';
import view from 'src/modules/categoryPublication/view/categoryPublicationViewReducers';
import destroy from 'src/modules/categoryPublication/destroy/categoryPublicationDestroyReducers';
import importerReducer from 'src/modules/categoryPublication/importer/categoryPublicationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
