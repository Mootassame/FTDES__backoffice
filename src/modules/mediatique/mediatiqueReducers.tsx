import list from 'src/modules/mediatique/list/mediatiqueListReducers';
import form from 'src/modules/mediatique/form/mediatiqueFormReducers';
import view from 'src/modules/mediatique/view/mediatiqueViewReducers';
import destroy from 'src/modules/mediatique/destroy/mediatiqueDestroyReducers';
import importerReducer from 'src/modules/mediatique/importer/mediatiqueImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
