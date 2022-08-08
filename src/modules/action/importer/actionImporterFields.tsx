import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import actionEnumerators from 'src/modules/action/actionEnumerators';

export default [
  {
    name: 'sujet',
    label: i18n('entities.action.fields.sujet'),
    schema: schemas.enumerator(
      i18n('entities.action.fields.sujet'),
      {
        "required": true,
        "options": actionEnumerators.sujet
      },
    ),
  },
  {
    name: 'region',
    label: i18n('entities.action.fields.region'),
    schema: schemas.enumerator(
      i18n('entities.action.fields.region'),
      {
        "required": true,
        "options": actionEnumerators.region
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.action.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.action.fields.type'),
      {
        "required": true,
        "options": actionEnumerators.type
      },
    ),
  },
  {
    name: 'genre',
    label: i18n('entities.action.fields.genre'),
    schema: schemas.enumerator(
      i18n('entities.action.fields.genre'),
      {
        "required": true,
        "options": actionEnumerators.genre
      },
    ),
  },
  {
    name: 'categorie',
    label: i18n('entities.action.fields.categorie'),
    schema: schemas.enumerator(
      i18n('entities.action.fields.categorie'),
      {
        "required": true,
        "options": actionEnumerators.categorie
      },
    ),
  },
  {
    name: 'espace',
    label: i18n('entities.action.fields.espace'),
    schema: schemas.enumerator(
      i18n('entities.action.fields.espace'),
      {
        "required": true,
        "options": actionEnumerators.espace
      },
    ),
  },
  {
    name: 'acteurs',
    label: i18n('entities.action.fields.acteurs'),
    schema: schemas.enumerator(
      i18n('entities.action.fields.acteurs'),
      {
        "required": true,
        "options": actionEnumerators.acteurs
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.action.fields.description'),
    schema: schemas.string(
      i18n('entities.action.fields.description'),
      {},
    ),
  },
  {
    name: 'modeAction',
    label: i18n('entities.action.fields.modeAction'),
    schema: schemas.enumerator(
      i18n('entities.action.fields.modeAction'),
      {
        "required": true,
        "options": actionEnumerators.modeAction
      },
    ),
  },
  {
    name: 'mouvement',
    label: i18n('entities.action.fields.mouvement'),
    schema: schemas.relationToOne(
      i18n('entities.action.fields.mouvement'),
      {},
    ),
  },
  {
    name: 'suicide',
    label: i18n('entities.action.fields.suicide'),
    schema: schemas.relationToMany(
      i18n('entities.action.fields.suicide'),
      {},
    ),
  },
  {
    name: 'violence',
    label: i18n('entities.action.fields.violence'),
    schema: schemas.relationToMany(
      i18n('entities.action.fields.violence'),
      {},
    ),
  },
];