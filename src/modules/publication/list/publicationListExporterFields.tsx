import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.publication.fields.id'),
  },
  {
    name: 'thematique',
    label: i18n('entities.publication.fields.thematique'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'categorie',
    label: i18n('entities.publication.fields.categorie'),
  },
  {
    name: 'type',
    label: i18n('entities.publication.fields.type'),
  },
  {
    name: 'supports',
    label: i18n('entities.publication.fields.supports'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'description',
    label: i18n('entities.publication.fields.description'),
  },
  {
    name: 'statut',
    label: i18n('entities.publication.fields.statut'),
  },
  {
    name: 'date',
    label: i18n('entities.publication.fields.date'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.publication.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.publication.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
