import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'titre',
    label: i18n('entities.tags.fields.titre'),
    schema: schemas.string(
      i18n('entities.tags.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.tags.fields.description'),
    schema: schemas.string(
      i18n('entities.tags.fields.description'),
      {
        "required": true
      },
    ),
  },
];