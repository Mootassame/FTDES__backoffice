import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.thematique.fields.id'),
  },
  {
    name: 'titre',
    label: i18n('entities.thematique.fields.titre'),
  },
  {
    name: 'description',
    label: i18n('entities.thematique.fields.description'),
  },
  {
    name: 'tags',
    label: i18n('entities.thematique.fields.tags'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.thematique.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.thematique.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
