import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import publicationEnumerators from 'src/modules/publication/publicationEnumerators';
import moment from 'moment';

export default [
  {
    name: 'thematique',
    label: i18n('entities.publication.fields.thematique'),
    schema: schemas.relationToOne(
      i18n('entities.publication.fields.thematique'),
      {},
    ),
  },
  {
    name: 'categorie',
    label: i18n('entities.publication.fields.categorie'),
    schema: schemas.enumerator(
      i18n('entities.publication.fields.categorie'),
      {
        "required": true,
        "options": publicationEnumerators.categorie
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.publication.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.publication.fields.type'),
      {
        "required": true,
        "options": publicationEnumerators.type
      },
    ),
  },
  {
    name: 'supports',
    label: i18n('entities.publication.fields.supports'),
    schema: schemas.files(
      i18n('entities.publication.fields.supports'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.publication.fields.description'),
    schema: schemas.string(
      i18n('entities.publication.fields.description'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'statut',
    label: i18n('entities.publication.fields.statut'),
    schema: schemas.enumerator(
      i18n('entities.publication.fields.statut'),
      {
        "required": true,
        "options": publicationEnumerators.statut
      },
    ),
  },
  {
    name: 'date',
    label: i18n('entities.publication.fields.date'),
    schema: schemas.date(
      i18n('entities.publication.fields.date'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];