import list from 'src/modules/thematique/list/thematiqueListReducers';
import form from 'src/modules/thematique/form/thematiqueFormReducers';
import view from 'src/modules/thematique/view/thematiqueViewReducers';
import destroy from 'src/modules/thematique/destroy/thematiqueDestroyReducers';
import importerReducer from 'src/modules/thematique/importer/thematiqueImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
