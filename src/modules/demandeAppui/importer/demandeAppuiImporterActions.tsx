import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/demandeAppui/importer/demandeAppuiImporterSelectors';
import DemandeAppuiService from 'src/modules/demandeAppui/demandeAppuiService';
import fields from 'src/modules/demandeAppui/importer/demandeAppuiImporterFields';
import { i18n } from 'src/i18n';

const demandeAppuiImporterActions = importerActions(
  'DEMANDEAPPUI_IMPORTER',
  selectors,
  DemandeAppuiService.import,
  fields,
  i18n('entities.demandeAppui.importer.fileName'),
);

export default demandeAppuiImporterActions;