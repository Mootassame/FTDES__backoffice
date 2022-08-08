import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import evenementEnumerators from 'src/modules/evenement/evenementEnumerators';
import moment from 'moment';

export default [
  {
    name: 'thematique',
    label: i18n('entities.evenement.fields.thematique'),
    schema: schemas.relationToOne(
      i18n('entities.evenement.fields.thematique'),
      {},
    ),
  },
  {
    name: 'categorie',
    label: i18n('entities.evenement.fields.categorie'),
    schema: schemas.enumerator(
      i18n('entities.evenement.fields.categorie'),
      {
        "required": true,
        "options": evenementEnumerators.categorie
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.evenement.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.evenement.fields.type'),
      {
        "required": true,
        "options": evenementEnumerators.type
      },
    ),
  },
  {
    name: 'supports',
    label: i18n('entities.evenement.fields.supports'),
    schema: schemas.files(
      i18n('entities.evenement.fields.supports'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.evenement.fields.description'),
    schema: schemas.string(
      i18n('entities.evenement.fields.description'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'date',
    label: i18n('entities.evenement.fields.date'),
    schema: schemas.date(
      i18n('entities.evenement.fields.date'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'statut',
    label: i18n('entities.evenement.fields.statut'),
    schema: schemas.enumerator(
      i18n('entities.evenement.fields.statut'),
      {
        "required": true,
        "options": evenementEnumerators.statut
      },
    ),
  },
  {
    name: 'emplacement',
    label: i18n('entities.evenement.fields.emplacement'),
    schema: schemas.string(
      i18n('entities.evenement.fields.emplacement'),
      {
        "required": true
      },
    ),
  },
];