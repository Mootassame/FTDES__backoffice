import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/thematique/importer/thematiqueImporterSelectors';
import ThematiqueService from 'src/modules/thematique/thematiqueService';
import fields from 'src/modules/thematique/importer/thematiqueImporterFields';
import { i18n } from 'src/i18n';

const thematiqueImporterActions = importerActions(
  'THEMATIQUE_IMPORTER',
  selectors,
  ThematiqueService.import,
  fields,
  i18n('entities.thematique.importer.fileName'),
);

export default thematiqueImporterActions;