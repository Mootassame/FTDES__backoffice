import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.categoryAppel.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.categoryAppel.fields.title'),
  },
  {
    name: 'description',
    label: i18n(
      'entities.categoryAppel.fields.description',
    ),
  },
  {
    name: 'appels',
    label: i18n(
      'entities.categoryAppel.fields.appels',
    ),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n(
      'entities.categoryAppel.fields.createdAt',
    ),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n(
      'entities.categoryAppel.fields.updatedAt',
    ),
    render: exporterRenders.datetime(),
  },
];
