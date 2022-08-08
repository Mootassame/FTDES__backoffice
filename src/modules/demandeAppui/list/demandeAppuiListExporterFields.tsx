import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.demandeAppui.fields.id'),
  },
  {
    name: 'type',
    label: i18n('entities.demandeAppui.fields.type'),
  },
  {
    name: 'etat',
    label: i18n('entities.demandeAppui.fields.etat'),
  },
  {
    name: 'gouvernorat',
    label: i18n('entities.demandeAppui.fields.gouvernorat'),
  },
  {
    name: 'importance',
    label: i18n('entities.demandeAppui.fields.importance'),
  },
  {
    name: 'description',
    label: i18n('entities.demandeAppui.fields.description'),
  },
  {
    name: 'supports',
    label: i18n('entities.demandeAppui.fields.supports'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.demandeAppui.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.demandeAppui.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
