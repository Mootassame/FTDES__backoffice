import list from 'src/modules/artiste/list/artisteListReducers';
import form from 'src/modules/artiste/form/artisteFormReducers';
import view from 'src/modules/artiste/view/artisteViewReducers';
import destroy from 'src/modules/artiste/destroy/artisteDestroyReducers';
import importerReducer from 'src/modules/artiste/importer/artisteImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
