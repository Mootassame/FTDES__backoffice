import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.categoryEvenement.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.categoryEvenement.fields.title'),
  },
  {
    name: 'description',
    label: i18n(
      'entities.categoryEvenement.fields.description',
    ),
  },
  {
    name: 'evenements',
    label: i18n(
      'entities.categoryEvenement.fields.evenements',
    ),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n(
      'entities.categoryEvenement.fields.createdAt',
    ),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n(
      'entities.categoryEvenement.fields.updatedAt',
    ),
    render: exporterRenders.datetime(),
  },
];
