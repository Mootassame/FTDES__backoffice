import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.mouvement.fields.id'),
  },
  {
    name: 'sujet',
    label: i18n('entities.mouvement.fields.sujet'),
  },
  {
    name: 'date',
    label: i18n('entities.mouvement.fields.date'),
  },
  {
    name: 'observation',
    label: i18n('entities.mouvement.fields.observation'),
  },
  {
    name: 'actions',
    label: i18n('entities.mouvement.fields.actions'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.mouvement.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.mouvement.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
