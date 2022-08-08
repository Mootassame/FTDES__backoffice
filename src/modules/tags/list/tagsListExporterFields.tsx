import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.tags.fields.id'),
  },
  {
    name: 'titre',
    label: i18n('entities.tags.fields.titre'),
  },
  {
    name: 'description',
    label: i18n('entities.tags.fields.description'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.tags.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.tags.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
