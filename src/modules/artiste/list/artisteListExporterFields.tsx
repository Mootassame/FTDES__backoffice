import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.artiste.fields.id'),
  },
  {
    name: 'nom',
    label: i18n('entities.artiste.fields.nom'),
  },
  {
    name: 'prenom',
    label: i18n('entities.artiste.fields.prenom'),
  },
  {
    name: 'domaine',
    label: i18n('entities.artiste.fields.domaine'),
  },
  {
    name: 'adresse',
    label: i18n('entities.artiste.fields.adresse'),
  },
  {
    name: 'email',
    label: i18n('entities.artiste.fields.email'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.artiste.fields.phoneNumber'),
  },
  {
    name: 'espaceArtistique',
    label: i18n('entities.artiste.fields.espaceArtistique'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.artiste.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.artiste.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
