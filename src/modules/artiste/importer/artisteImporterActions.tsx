import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/artiste/importer/artisteImporterSelectors';
import ArtisteService from 'src/modules/artiste/artisteService';
import fields from 'src/modules/artiste/importer/artisteImporterFields';
import { i18n } from 'src/i18n';

const artisteImporterActions = importerActions(
  'ARTISTE_IMPORTER',
  selectors,
  ArtisteService.import,
  fields,
  i18n('entities.artiste.importer.fileName'),
);

export default artisteImporterActions;