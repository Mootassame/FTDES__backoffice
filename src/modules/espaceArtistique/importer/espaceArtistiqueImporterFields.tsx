import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'artiste',
    label: i18n('entities.espaceArtistique.fields.artiste'),
    schema: schemas.relationToOne(
      i18n('entities.espaceArtistique.fields.artiste'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'supports',
    label: i18n('entities.espaceArtistique.fields.supports'),
    schema: schemas.files(
      i18n('entities.espaceArtistique.fields.supports'),
      {},
    ),
  },
  {
    name: 'titre',
    label: i18n('entities.espaceArtistique.fields.titre'),
    schema: schemas.string(
      i18n('entities.espaceArtistique.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.espaceArtistique.fields.description'),
    schema: schemas.string(
      i18n('entities.espaceArtistique.fields.description'),
      {
        "required": true
      },
    ),
  },
];