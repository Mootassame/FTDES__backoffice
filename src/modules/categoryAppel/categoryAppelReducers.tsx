import list from 'src/modules/categoryAppel/list/categoryAppelListReducers';
import form from 'src/modules/categoryAppel/form/categoryAppelFormReducers';
import view from 'src/modules/categoryAppel/view/categoryAppelViewReducers';
import destroy from 'src/modules/categoryAppel/destroy/categoryAppelDestroyReducers';
import importerReducer from 'src/modules/categoryAppel/importer/categoryAppelImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
