import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/mouvement/importer/mouvementImporterSelectors';
import MouvementService from 'src/modules/mouvement/mouvementService';
import fields from 'src/modules/mouvement/importer/mouvementImporterFields';
import { i18n } from 'src/i18n';

const mouvementImporterActions = importerActions(
  'MOUVEMENT_IMPORTER',
  selectors,
  MouvementService.import,
  fields,
  i18n('entities.mouvement.importer.fileName'),
);

export default mouvementImporterActions;