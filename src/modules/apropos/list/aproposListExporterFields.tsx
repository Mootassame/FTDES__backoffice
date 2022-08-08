import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.apropos.fields.id'),
  },
  {
    name: 'about',
    label: i18n('entities.apropos.fields.about'),
  },
  {
    name: 'objectifs',
    label: i18n('entities.apropos.fields.objectifs'),
  },
  {
    name: 'services',
    label: i18n('entities.apropos.fields.services'),
  },
  {
    name: 'contacts',
    label: i18n('entities.apropos.fields.contacts'),
  },
  {
    name: 'tutorial',
    label: i18n('entities.apropos.fields.tutorial'),
  },
  {
    name: 'publicationDesc',
    label: i18n('entities.apropos.fields.publicationDesc'),
  },
  {
    name: 'appelDesc',
    label: i18n('entities.apropos.fields.appelDesc'),
  },
  {
    name: 'forumDesc',
    label: i18n('entities.apropos.fields.forumDesc'),
  },
  {
    name: 'mouvementDesc',
    label: i18n('entities.apropos.fields.mouvementDesc'),
  },
  {
    name: 'mediatequeDesc',
    label: i18n('entities.apropos.fields.mediatequeDesc'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.apropos.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.apropos.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
