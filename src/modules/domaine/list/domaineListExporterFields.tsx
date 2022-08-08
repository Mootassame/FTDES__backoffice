import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.domaine.fields.id'),
  },
  {
    name: 'nom',
    label: i18n('entities.domaine.fields.nom'),
  },
  {
    name: 'prenom',
    label: i18n('entities.domaine.fields.prenom'),
  },
  {
    name: 'domaine',
    label: i18n('entities.domaine.fields.domaine'),
  },
  {
    name: 'adresse',
    label: i18n('entities.domaine.fields.adresse'),
  },
  {
    name: 'email',
    label: i18n('entities.domaine.fields.email'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.domaine.fields.phoneNumber'),
  },
  {
    name: 'espaceArtistique',
    label: i18n('entities.domaine.fields.espaceArtistique'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.domaine.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.domaine.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
