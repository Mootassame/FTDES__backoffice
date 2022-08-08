import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/action/importer/actionImporterSelectors';
import ActionService from 'src/modules/action/actionService';
import fields from 'src/modules/action/importer/actionImporterFields';
import { i18n } from 'src/i18n';

const actionImporterActions = importerActions(
  'ACTION_IMPORTER',
  selectors,
  ActionService.import,
  fields,
  i18n('entities.action.importer.fileName'),
);

export default actionImporterActions;