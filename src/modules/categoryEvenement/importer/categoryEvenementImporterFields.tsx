import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.categoryEvenement.fields.title'),
    schema: schemas.string(
      i18n('entities.categoryEvenement.fields.title'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'description',
    label: i18n(
      'entities.categoryEvenement.fields.description',
    ),
    schema: schemas.string(
      i18n('entities.categoryEvenement.fields.description'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'evenements',
    label: i18n(
      'entities.categoryEvenement.fields.evenements',
    ),
    schema: schemas.relationToMany(
      i18n('entities.categoryEvenement.fields.evenements'),
      {},
    ),
  },
];
