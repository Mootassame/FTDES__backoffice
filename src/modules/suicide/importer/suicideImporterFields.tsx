import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import suicideEnumerators from 'src/modules/suicide/suicideEnumerators';
import moment from 'moment';

export default [
  {
    name: 'date',
    label: i18n('entities.suicide.fields.date'),
    schema: schemas.date(
      i18n('entities.suicide.fields.date'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'region',
    label: i18n('entities.suicide.fields.region'),
    schema: schemas.enumerator(
      i18n('entities.suicide.fields.region'),
      {
        "required": true,
        "options": suicideEnumerators.region
      },
    ),
  },
  {
    name: 'age',
    label: i18n('entities.suicide.fields.age'),
    schema: schemas.integer(
      i18n('entities.suicide.fields.age'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'genre',
    label: i18n('entities.suicide.fields.genre'),
    schema: schemas.enumerator(
      i18n('entities.suicide.fields.genre'),
      {
        "required": true,
        "options": suicideEnumerators.genre
      },
    ),
  },
  {
    name: 'maniere',
    label: i18n('entities.suicide.fields.maniere'),
    schema: schemas.enumerator(
      i18n('entities.suicide.fields.maniere'),
      {
        "required": true,
        "options": suicideEnumerators.maniere
      },
    ),
  },
  {
    name: 'raison',
    label: i18n('entities.suicide.fields.raison'),
    schema: schemas.enumerator(
      i18n('entities.suicide.fields.raison'),
      {
        "required": true,
        "options": suicideEnumerators.raison
      },
    ),
  },
  {
    name: 'espace',
    label: i18n('entities.suicide.fields.espace'),
    schema: schemas.enumerator(
      i18n('entities.suicide.fields.espace'),
      {
        "required": true,
        "options": suicideEnumerators.espace
      },
    ),
  },
  {
    name: 'cible',
    label: i18n('entities.suicide.fields.cible'),
    schema: schemas.enumerator(
      i18n('entities.suicide.fields.cible'),
      {
        "required": true,
        "options": suicideEnumerators.cible
      },
    ),
  },
  {
    name: 'deces',
    label: i18n('entities.suicide.fields.deces'),
    schema: schemas.enumerator(
      i18n('entities.suicide.fields.deces'),
      {
        "required": true,
        "options": suicideEnumerators.deces
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.suicide.fields.description'),
    schema: schemas.string(
      i18n('entities.suicide.fields.description'),
      {},
    ),
  },
  {
    name: 'consequence',
    label: i18n('entities.suicide.fields.consequence'),
    schema: schemas.string(
      i18n('entities.suicide.fields.consequence'),
      {},
    ),
  },
  {
    name: 'action',
    label: i18n('entities.suicide.fields.action'),
    schema: schemas.relationToOne(
      i18n('entities.suicide.fields.action'),
      {},
    ),
  },
];