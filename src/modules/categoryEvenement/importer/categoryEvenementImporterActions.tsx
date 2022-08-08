import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/categoryEvenement/importer/categoryEvenementImporterSelectors';
import CategoryEvenementService from 'src/modules/categoryEvenement/categoryEvenementService';
import fields from 'src/modules/categoryEvenement/importer/categoryEvenementImporterFields';
import { i18n } from 'src/i18n';

const categoryEvenementImporterActions = importerActions(
  'CATEGORYREPORT_IMPORTER',
  selectors,
  CategoryEvenementService.import,
  fields,
  i18n('entities.categoryEvenement.importer.fileName'),
);

export default categoryEvenementImporterActions;
