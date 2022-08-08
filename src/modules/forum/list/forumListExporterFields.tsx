import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.forum.fields.id'),
  },
  {
    name: 'titre',
    label: i18n('entities.forum.fields.titre'),
  },
  {
    name: 'sujet',
    label: i18n('entities.forum.fields.sujet'),
  },
  {
    name: 'visibilite',
    label: i18n('entities.forum.fields.visibilite'),
  },
  {
    name: 'statut',
    label: i18n('entities.forum.fields.statut'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.forum.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.forum.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
