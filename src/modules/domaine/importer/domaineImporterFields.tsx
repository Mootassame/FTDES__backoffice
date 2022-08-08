import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nom',
    label: i18n('entities.domaine.fields.nom'),
    schema: schemas.string(
      i18n('entities.domaine.fields.nom'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'prenom',
    label: i18n('entities.domaine.fields.prenom'),
    schema: schemas.string(
      i18n('entities.domaine.fields.prenom'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'domaine',
    label: i18n('entities.domaine.fields.domaine'),
    schema: schemas.string(
      i18n('entities.domaine.fields.domaine'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'adresse',
    label: i18n('entities.domaine.fields.adresse'),
    schema: schemas.string(
      i18n('entities.domaine.fields.adresse'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.domaine.fields.email'),
    schema: schemas.string(
      i18n('entities.domaine.fields.email'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.domaine.fields.phoneNumber'),
    schema: schemas.integer(
      i18n('entities.domaine.fields.phoneNumber'),
      {},
    ),
  },
  {
    name: 'espaceArtistique',
    label: i18n('entities.domaine.fields.espaceArtistique'),
    schema: schemas.relationToOne(
      i18n('entities.domaine.fields.espaceArtistique'),
      {},
    ),
  },
];
