import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.espaceArtistique.fields.id'),
  },
  {
    name: 'artiste',
    label: i18n('entities.espaceArtistique.fields.artiste'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'supports',
    label: i18n('entities.espaceArtistique.fields.supports'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'titre',
    label: i18n('entities.espaceArtistique.fields.titre'),
  },
  {
    name: 'description',
    label: i18n('entities.espaceArtistique.fields.description'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.espaceArtistique.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.espaceArtistique.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
