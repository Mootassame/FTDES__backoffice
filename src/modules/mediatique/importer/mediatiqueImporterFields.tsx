import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import mediatiqueEnumerators from 'src/modules/mediatique/mediatiqueEnumerators';

export default [
  {
    name: 'title',
    label: i18n('entities.mediatique.fields.title'),
    schema: schemas.string(
      i18n('entities.mediatique.fields.title'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.mediatique.fields.description'),
    schema: schemas.string(
      i18n('entities.mediatique.fields.description'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.mediatique.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.mediatique.fields.type'),
      {
        "required": true,
        "options": mediatiqueEnumerators.type
      },
    ),
  },
  {
    name: 'photos',
    label: i18n('entities.mediatique.fields.photos'),
    schema: schemas.images(
      i18n('entities.mediatique.fields.photos'),
      {},
    ),
  },
  {
    name: 'videos',
    label: i18n('entities.mediatique.fields.videos'),
    schema: schemas.files(
      i18n('entities.mediatique.fields.videos'),
      {},
    ),
  },
  {
    name: 'attachements',
    label: i18n('entities.mediatique.fields.attachements'),
    schema: schemas.files(
      i18n('entities.mediatique.fields.attachements'),
      {},
    ),
  },
];