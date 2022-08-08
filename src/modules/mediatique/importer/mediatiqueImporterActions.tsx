import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/mediatique/importer/mediatiqueImporterSelectors';
import MediatiqueService from 'src/modules/mediatique/mediatiqueService';
import fields from 'src/modules/mediatique/importer/mediatiqueImporterFields';
import { i18n } from 'src/i18n';

const mediatiqueImporterActions = importerActions(
  'MEDIATIQUE_IMPORTER',
  selectors,
  MediatiqueService.import,
  fields,
  i18n('entities.mediatique.importer.fileName'),
);

export default mediatiqueImporterActions;