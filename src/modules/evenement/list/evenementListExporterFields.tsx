import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.evenement.fields.id'),
  },
  {
    name: 'thematique',
    label: i18n('entities.evenement.fields.thematique'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'categorie',
    label: i18n('entities.evenement.fields.categorie'),
  },
  {
    name: 'type',
    label: i18n('entities.evenement.fields.type'),
  },
  {
    name: 'supports',
    label: i18n('entities.evenement.fields.supports'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'description',
    label: i18n('entities.evenement.fields.description'),
  },
  {
    name: 'date',
    label: i18n('entities.evenement.fields.date'),
  },
  {
    name: 'statut',
    label: i18n('entities.evenement.fields.statut'),
  },
  {
    name: 'emplacement',
    label: i18n('entities.evenement.fields.emplacement'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.evenement.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.evenement.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
