import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/publication/importer/publicationImporterSelectors';
import PublicationService from 'src/modules/publication/publicationService';
import fields from 'src/modules/publication/importer/publicationImporterFields';
import { i18n } from 'src/i18n';

const publicationImporterActions = importerActions(
  'PUBLICATION_IMPORTER',
  selectors,
  PublicationService.import,
  fields,
  i18n('entities.publication.importer.fileName'),
);

export default publicationImporterActions;