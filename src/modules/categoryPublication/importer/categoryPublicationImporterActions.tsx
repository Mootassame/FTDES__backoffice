import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/categoryPublication/importer/categoryPublicationImporterSelectors';
import CategoryPublicationService from 'src/modules/categoryPublication/categoryPublicationService';
import fields from 'src/modules/categoryPublication/importer/categoryPublicationImporterFields';
import { i18n } from 'src/i18n';

const categoryPublicationImporterActions = importerActions(
  'CATEGORYPUBLICATION_IMPORTER',
  selectors,
  CategoryPublicationService.import,
  fields,
  i18n('entities.categoryPublication.importer.fileName'),
);

export default categoryPublicationImporterActions;