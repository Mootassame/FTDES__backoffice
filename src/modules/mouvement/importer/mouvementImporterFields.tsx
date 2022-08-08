import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import mouvementEnumerators from 'src/modules/mouvement/mouvementEnumerators';
import moment from 'moment';

export default [
  {
    name: 'sujet',
    label: i18n('entities.mouvement.fields.sujet'),
    schema: schemas.enumerator(
      i18n('entities.mouvement.fields.sujet'),
      {
        "required": true,
        "options": mouvementEnumerators.sujet
      },
    ),
  },
  {
    name: 'date',
    label: i18n('entities.mouvement.fields.date'),
    schema: schemas.date(
      i18n('entities.mouvement.fields.date'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'observation',
    label: i18n('entities.mouvement.fields.observation'),
    schema: schemas.string(
      i18n('entities.mouvement.fields.observation'),
      {},
    ),
  },
  {
    name: 'actions',
    label: i18n('entities.mouvement.fields.actions'),
    schema: schemas.relationToMany(
      i18n('entities.mouvement.fields.actions'),
      {},
    ),
  },
];