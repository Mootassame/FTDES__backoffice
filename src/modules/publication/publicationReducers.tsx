import list from 'src/modules/publication/list/publicationListReducers';
import form from 'src/modules/publication/form/publicationFormReducers';
import view from 'src/modules/publication/view/publicationViewReducers';
import destroy from 'src/modules/publication/destroy/publicationDestroyReducers';
import importerReducer from 'src/modules/publication/importer/publicationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
