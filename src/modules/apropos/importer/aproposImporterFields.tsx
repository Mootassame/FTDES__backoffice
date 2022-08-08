import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'about',
    label: i18n('entities.apropos.fields.about'),
    schema: schemas.string(
      i18n('entities.apropos.fields.about'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'objectifs',
    label: i18n('entities.apropos.fields.objectifs'),
    schema: schemas.string(
      i18n('entities.apropos.fields.objectifs'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'services',
    label: i18n('entities.apropos.fields.services'),
    schema: schemas.string(
      i18n('entities.apropos.fields.services'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'contacts',
    label: i18n('entities.apropos.fields.contacts'),
    schema: schemas.string(
      i18n('entities.apropos.fields.contacts'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'tutorial',
    label: i18n('entities.apropos.fields.tutorial'),
    schema: schemas.string(
      i18n('entities.apropos.fields.tutorial'),
      {},
    ),
  },
  {
    name: 'publicationDesc',
    label: i18n('entities.apropos.fields.publicationDesc'),
    schema: schemas.string(
      i18n('entities.apropos.fields.publicationDesc'),
      {},
    ),
  },
  {
    name: 'appelDesc',
    label: i18n('entities.apropos.fields.appelDesc'),
    schema: schemas.string(
      i18n('entities.apropos.fields.appelDesc'),
      {},
    ),
  },
  {
    name: 'forumDesc',
    label: i18n('entities.apropos.fields.forumDesc'),
    schema: schemas.string(
      i18n('entities.apropos.fields.forumDesc'),
      {},
    ),
  },
  {
    name: 'mouvementDesc',
    label: i18n('entities.apropos.fields.mouvementDesc'),
    schema: schemas.string(
      i18n('entities.apropos.fields.mouvementDesc'),
      {},
    ),
  },
  {
    name: 'mediatequeDesc',
    label: i18n('entities.apropos.fields.mediatequeDesc'),
    schema: schemas.string(
      i18n('entities.apropos.fields.mediatequeDesc'),
      {},
    ),
  },
];