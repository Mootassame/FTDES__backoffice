import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/tags/importer/tagsImporterSelectors';
import TagsService from 'src/modules/tags/tagsService';
import fields from 'src/modules/tags/importer/tagsImporterFields';
import { i18n } from 'src/i18n';

const tagsImporterActions = importerActions(
  'TAGS_IMPORTER',
  selectors,
  TagsService.import,
  fields,
  i18n('entities.tags.importer.fileName'),
);

export default tagsImporterActions;