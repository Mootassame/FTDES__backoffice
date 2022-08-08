import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.categoryPublication.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.categoryPublication.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.categoryPublication.fields.description'),
  },
  {
    name: 'publications',
    label: i18n('entities.categoryPublication.fields.publications'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.categoryPublication.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.categoryPublication.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
