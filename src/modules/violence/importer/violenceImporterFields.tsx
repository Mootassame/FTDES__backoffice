import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import violenceEnumerators from 'src/modules/violence/violenceEnumerators';
import moment from 'moment';

export default [
  {
    name: 'date',
    label: i18n('entities.violence.fields.date'),
    schema: schemas.date(
      i18n('entities.violence.fields.date'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'region',
    label: i18n('entities.violence.fields.region'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.region'),
      {
        "required": true,
        "options": violenceEnumerators.region
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.violence.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.type'),
      {
        "required": true,
        "options": violenceEnumerators.type
      },
    ),
  },
  {
    name: 'mode',
    label: i18n('entities.violence.fields.mode'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.mode'),
      {
        "required": true,
        "options": violenceEnumerators.mode
      },
    ),
  },
  {
    name: 'cadre',
    label: i18n('entities.violence.fields.cadre'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.cadre'),
      {
        "required": true,
        "options": violenceEnumerators.cadre
      },
    ),
  },
  {
    name: 'espace',
    label: i18n('entities.violence.fields.espace'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.espace'),
      {
        "required": true,
        "options": violenceEnumerators.espace
      },
    ),
  },
  {
    name: 'degre',
    label: i18n('entities.violence.fields.degre'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.degre'),
      {
        "required": true,
        "options": violenceEnumerators.degre
      },
    ),
  },
  {
    name: 'planifie',
    label: i18n('entities.violence.fields.planifie'),
    schema: schemas.boolean(
      i18n('entities.violence.fields.planifie'),
      {},
    ),
  },
  {
    name: 'categorie',
    label: i18n('entities.violence.fields.categorie'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.categorie'),
      {
        "required": true,
        "options": violenceEnumerators.categorie
      },
    ),
  },
  {
    name: 'traitement',
    label: i18n('entities.violence.fields.traitement'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.traitement'),
      {
        "required": true,
        "options": violenceEnumerators.traitement
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.violence.fields.description'),
    schema: schemas.string(
      i18n('entities.violence.fields.description'),
      {},
    ),
  },
  {
    name: 'idAgresseur',
    label: i18n('entities.violence.fields.idAgresseur'),
    schema: schemas.string(
      i18n('entities.violence.fields.idAgresseur'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'objectif',
    label: i18n('entities.violence.fields.objectif'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.objectif'),
      {
        "required": true,
        "options": violenceEnumerators.objectif
      },
    ),
  },
  {
    name: 'explication',
    label: i18n('entities.violence.fields.explication'),
    schema: schemas.string(
      i18n('entities.violence.fields.explication'),
      {},
    ),
  },
  {
    name: 'outil',
    label: i18n('entities.violence.fields.outil'),
    schema: schemas.string(
      i18n('entities.violence.fields.outil'),
      {},
    ),
  },
  {
    name: 'typeAgresseur',
    label: i18n('entities.violence.fields.typeAgresseur'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.typeAgresseur'),
      {
        "required": true,
        "options": violenceEnumerators.typeAgresseur
      },
    ),
  },
  {
    name: 'nombreAgresseur',
    label: i18n('entities.violence.fields.nombreAgresseur'),
    schema: schemas.integer(
      i18n('entities.violence.fields.nombreAgresseur'),
      {},
    ),
  },
  {
    name: 'genreAgresseur',
    label: i18n('entities.violence.fields.genreAgresseur'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.genreAgresseur'),
      {
        "required": true,
        "options": violenceEnumerators.genreAgresseur
      },
    ),
  },
  {
    name: 'ageAgresseur',
    label: i18n('entities.violence.fields.ageAgresseur'),
    schema: schemas.integer(
      i18n('entities.violence.fields.ageAgresseur'),
      {},
    ),
  },
  {
    name: 'idAgresse',
    label: i18n('entities.violence.fields.idAgresse'),
    schema: schemas.string(
      i18n('entities.violence.fields.idAgresse'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'nombreAgresse',
    label: i18n('entities.violence.fields.nombreAgresse'),
    schema: schemas.integer(
      i18n('entities.violence.fields.nombreAgresse'),
      {},
    ),
  },
  {
    name: 'typeAgresse',
    label: i18n('entities.violence.fields.typeAgresse'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.typeAgresse'),
      {
        "required": true,
        "options": violenceEnumerators.typeAgresse
      },
    ),
  },
  {
    name: 'genreAgresse',
    label: i18n('entities.violence.fields.genreAgresse'),
    schema: schemas.enumerator(
      i18n('entities.violence.fields.genreAgresse'),
      {
        "required": true,
        "options": violenceEnumerators.genreAgresse
      },
    ),
  },
  {
    name: 'ageAgresse',
    label: i18n('entities.violence.fields.ageAgresse'),
    schema: schemas.integer(
      i18n('entities.violence.fields.ageAgresse'),
      {},
    ),
  },
  {
    name: 'action',
    label: i18n('entities.violence.fields.action'),
    schema: schemas.relationToOne(
      i18n('entities.violence.fields.action'),
      {},
    ),
  },
];