import list from 'src/modules/espaceArtistique/list/espaceArtistiqueListReducers';
import form from 'src/modules/espaceArtistique/form/espaceArtistiqueFormReducers';
import view from 'src/modules/espaceArtistique/view/espaceArtistiqueViewReducers';
import destroy from 'src/modules/espaceArtistique/destroy/espaceArtistiqueDestroyReducers';
import importerReducer from 'src/modules/espaceArtistique/importer/espaceArtistiqueImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
