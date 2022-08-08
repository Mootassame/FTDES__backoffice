import list from 'src/modules/suicide/list/suicideListReducers';
import form from 'src/modules/suicide/form/suicideFormReducers';
import view from 'src/modules/suicide/view/suicideViewReducers';
import destroy from 'src/modules/suicide/destroy/suicideDestroyReducers';
import importerReducer from 'src/modules/suicide/importer/suicideImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
