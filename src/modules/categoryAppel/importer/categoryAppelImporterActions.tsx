import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/categoryAppel/importer/categoryAppelImporterSelectors';
import CategoryAppelService from 'src/modules/categoryAppel/categoryAppelService';
import fields from 'src/modules/categoryAppel/importer/categoryAppelImporterFields';
import { i18n } from 'src/i18n';

const categoryAppelImporterActions = importerActions(
  'CATEGORYREPORT_IMPORTER',
  selectors,
  CategoryAppelService.import,
  fields,
  i18n('entities.categoryAppel.importer.fileName'),
);

export default categoryAppelImporterActions;
