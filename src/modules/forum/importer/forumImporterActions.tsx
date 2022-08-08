import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/forum/importer/forumImporterSelectors';
import ForumService from 'src/modules/forum/forumService';
import fields from 'src/modules/forum/importer/forumImporterFields';
import { i18n } from 'src/i18n';

const forumImporterActions = importerActions(
  'FORUM_IMPORTER',
  selectors,
  ForumService.import,
  fields,
  i18n('entities.forum.importer.fileName'),
);

export default forumImporterActions;