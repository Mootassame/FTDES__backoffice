import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.categoryPublication.fields.title'),
    schema: schemas.string(
      i18n('entities.categoryPublication.fields.title'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.categoryPublication.fields.description'),
    schema: schemas.string(
      i18n('entities.categoryPublication.fields.description'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'publications',
    label: i18n('entities.categoryPublication.fields.publications'),
    schema: schemas.relationToMany(
      i18n('entities.categoryPublication.fields.publications'),
      {},
    ),
  },
];