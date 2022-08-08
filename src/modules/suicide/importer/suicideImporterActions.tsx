import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/suicide/importer/suicideImporterSelectors';
import SuicideService from 'src/modules/suicide/suicideService';
import fields from 'src/modules/suicide/importer/suicideImporterFields';
import { i18n } from 'src/i18n';

const suicideImporterActions = importerActions(
  'SUICIDE_IMPORTER',
  selectors,
  SuicideService.import,
  fields,
  i18n('entities.suicide.importer.fileName'),
);

export default suicideImporterActions;