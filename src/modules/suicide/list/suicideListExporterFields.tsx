import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.suicide.fields.id'),
  },
  {
    name: 'date',
    label: i18n('entities.suicide.fields.date'),
  },
  {
    name: 'region',
    label: i18n('entities.suicide.fields.region'),
  },
  {
    name: 'age',
    label: i18n('entities.suicide.fields.age'),
  },
  {
    name: 'genre',
    label: i18n('entities.suicide.fields.genre'),
  },
  {
    name: 'maniere',
    label: i18n('entities.suicide.fields.maniere'),
  },
  {
    name: 'raison',
    label: i18n('entities.suicide.fields.raison'),
  },
  {
    name: 'espace',
    label: i18n('entities.suicide.fields.espace'),
  },
  {
    name: 'cible',
    label: i18n('entities.suicide.fields.cible'),
  },
  {
    name: 'deces',
    label: i18n('entities.suicide.fields.deces'),
  },
  {
    name: 'description',
    label: i18n('entities.suicide.fields.description'),
  },
  {
    name: 'consequence',
    label: i18n('entities.suicide.fields.consequence'),
  },
  {
    name: 'action',
    label: i18n('entities.suicide.fields.action'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.suicide.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.suicide.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
