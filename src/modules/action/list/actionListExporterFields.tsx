import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.action.fields.id'),
  },
  {
    name: 'sujet',
    label: i18n('entities.action.fields.sujet'),
  },
  {
    name: 'region',
    label: i18n('entities.action.fields.region'),
  },
  {
    name: 'type',
    label: i18n('entities.action.fields.type'),
  },
  {
    name: 'genre',
    label: i18n('entities.action.fields.genre'),
  },
  {
    name: 'categorie',
    label: i18n('entities.action.fields.categorie'),
  },
  {
    name: 'espace',
    label: i18n('entities.action.fields.espace'),
  },
  {
    name: 'acteurs',
    label: i18n('entities.action.fields.acteurs'),
  },
  {
    name: 'description',
    label: i18n('entities.action.fields.description'),
  },
  {
    name: 'modeAction',
    label: i18n('entities.action.fields.modeAction'),
  },
  {
    name: 'mouvement',
    label: i18n('entities.action.fields.mouvement'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'suicide',
    label: i18n('entities.action.fields.suicide'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'violence',
    label: i18n('entities.action.fields.violence'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.action.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.action.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
