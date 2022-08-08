import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/apropos/importer/aproposImporterSelectors';
import AproposService from 'src/modules/apropos/aproposService';
import fields from 'src/modules/apropos/importer/aproposImporterFields';
import { i18n } from 'src/i18n';

const aproposImporterActions = importerActions(
  'APROPOS_IMPORTER',
  selectors,
  AproposService.import,
  fields,
  i18n('entities.apropos.importer.fileName'),
);

export default aproposImporterActions;