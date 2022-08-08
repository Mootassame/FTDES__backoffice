import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/domaine/importer/domaineImporterSelectors';
import DomaineService from 'src/modules/domaine/domaineService';
import fields from 'src/modules/domaine/importer/domaineImporterFields';
import { i18n } from 'src/i18n';

const domaineImporterActions = importerActions(
  'ARTISTE_IMPORTER',
  selectors,
  DomaineService.import,
  fields,
  i18n('entities.domaine.importer.fileName'),
);

export default domaineImporterActions;
