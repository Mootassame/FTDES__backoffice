import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/evenement/importer/evenementImporterSelectors';
import EvenementService from 'src/modules/evenement/evenementService';
import fields from 'src/modules/evenement/importer/evenementImporterFields';
import { i18n } from 'src/i18n';

const evenementImporterActions = importerActions(
  'EVENEMENT_IMPORTER',
  selectors,
  EvenementService.import,
  fields,
  i18n('entities.evenement.importer.fileName'),
);

export default evenementImporterActions;