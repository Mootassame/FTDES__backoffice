import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.categoryAppel.fields.title'),
    schema: schemas.string(
      i18n('entities.categoryAppel.fields.title'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'description',
    label: i18n(
      'entities.categoryAppel.fields.description',
    ),
    schema: schemas.string(
      i18n('entities.categoryAppel.fields.description'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'appels',
    label: i18n(
      'entities.categoryAppel.fields.appels',
    ),
    schema: schemas.relationToMany(
      i18n('entities.categoryAppel.fields.appels'),
      {},
    ),
  },
];
