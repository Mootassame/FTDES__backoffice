import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import demandeAppuiEnumerators from 'src/modules/demandeAppui/demandeAppuiEnumerators';

export default [
  {
    name: 'type',
    label: i18n('entities.demandeAppui.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.demandeAppui.fields.type'),
      {
        "required": true,
        "options": demandeAppuiEnumerators.type
      },
    ),
  },
  {
    name: 'etat',
    label: i18n('entities.demandeAppui.fields.etat'),
    schema: schemas.enumerator(
      i18n('entities.demandeAppui.fields.etat'),
      {
        "required": true,
        "options": demandeAppuiEnumerators.etat
      },
    ),
  },
  {
    name: 'gouvernorat',
    label: i18n('entities.demandeAppui.fields.gouvernorat'),
    schema: schemas.enumerator(
      i18n('entities.demandeAppui.fields.gouvernorat'),
      {
        "required": true,
        "options": demandeAppuiEnumerators.gouvernorat
      },
    ),
  },
  {
    name: 'importance',
    label: i18n('entities.demandeAppui.fields.importance'),
    schema: schemas.enumerator(
      i18n('entities.demandeAppui.fields.importance'),
      {
        "required": true,
        "options": demandeAppuiEnumerators.importance
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.demandeAppui.fields.description'),
    schema: schemas.string(
      i18n('entities.demandeAppui.fields.description'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'supports',
    label: i18n('entities.demandeAppui.fields.supports'),
    schema: schemas.files(
      i18n('entities.demandeAppui.fields.supports'),
      {},
    ),
  },
];