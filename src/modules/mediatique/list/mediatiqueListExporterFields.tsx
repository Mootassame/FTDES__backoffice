import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.mediatique.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.mediatique.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.mediatique.fields.description'),
  },
  {
    name: 'type',
    label: i18n('entities.mediatique.fields.type'),
  },
  {
    name: 'photos',
    label: i18n('entities.mediatique.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'videos',
    label: i18n('entities.mediatique.fields.videos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'attachements',
    label: i18n('entities.mediatique.fields.attachements'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.mediatique.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.mediatique.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
