import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/espaceArtistique/importer/espaceArtistiqueImporterSelectors';
import EspaceArtistiqueService from 'src/modules/espaceArtistique/espaceArtistiqueService';
import fields from 'src/modules/espaceArtistique/importer/espaceArtistiqueImporterFields';
import { i18n } from 'src/i18n';

const espaceArtistiqueImporterActions = importerActions(
  'ESPACEARTISTIQUE_IMPORTER',
  selectors,
  EspaceArtistiqueService.import,
  fields,
  i18n('entities.espaceArtistique.importer.fileName'),
);

export default espaceArtistiqueImporterActions;