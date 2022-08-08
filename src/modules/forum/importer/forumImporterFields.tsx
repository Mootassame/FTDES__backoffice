import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import forumEnumerators from 'src/modules/forum/forumEnumerators';

export default [
  {
    name: 'titre',
    label: i18n('entities.forum.fields.titre'),
    schema: schemas.string(
      i18n('entities.forum.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'sujet',
    label: i18n('entities.forum.fields.sujet'),
    schema: schemas.string(
      i18n('entities.forum.fields.sujet'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'visibilite',
    label: i18n('entities.forum.fields.visibilite'),
    schema: schemas.enumerator(
      i18n('entities.forum.fields.visibilite'),
      {
        "required": true,
        "options": forumEnumerators.visibilite
      },
    ),
  },
  {
    name: 'statut',
    label: i18n('entities.forum.fields.statut'),
    schema: schemas.enumerator(
      i18n('entities.forum.fields.statut'),
      {
        "required": true,
        "options": forumEnumerators.statut
      },
    ),
  },
];