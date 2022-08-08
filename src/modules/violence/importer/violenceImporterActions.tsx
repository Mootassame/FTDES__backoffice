import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/violence/importer/violenceImporterSelectors';
import ViolenceService from 'src/modules/violence/violenceService';
import fields from 'src/modules/violence/importer/violenceImporterFields';
import { i18n } from 'src/i18n';

const violenceImporterActions = importerActions(
  'VIOLENCE_IMPORTER',
  selectors,
  ViolenceService.import,
  fields,
  i18n('entities.violence.importer.fileName'),
);

export default violenceImporterActions;