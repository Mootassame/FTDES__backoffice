import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'titre',
    label: i18n('entities.thematique.fields.titre'),
    schema: schemas.string(
      i18n('entities.thematique.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.thematique.fields.description'),
    schema: schemas.string(
      i18n('entities.thematique.fields.description'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'tags',
    label: i18n('entities.thematique.fields.tags'),
    schema: schemas.relationToMany(
      i18n('entities.thematique.fields.tags'),
      {},
    ),
  },
];