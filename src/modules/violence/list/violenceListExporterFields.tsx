import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.violence.fields.id'),
  },
  {
    name: 'date',
    label: i18n('entities.violence.fields.date'),
  },
  {
    name: 'region',
    label: i18n('entities.violence.fields.region'),
  },
  {
    name: 'type',
    label: i18n('entities.violence.fields.type'),
  },
  {
    name: 'mode',
    label: i18n('entities.violence.fields.mode'),
  },
  {
    name: 'cadre',
    label: i18n('entities.violence.fields.cadre'),
  },
  {
    name: 'espace',
    label: i18n('entities.violence.fields.espace'),
  },
  {
    name: 'degre',
    label: i18n('entities.violence.fields.degre'),
  },
  {
    name: 'planifie',
    label: i18n('entities.violence.fields.planifie'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'categorie',
    label: i18n('entities.violence.fields.categorie'),
  },
  {
    name: 'traitement',
    label: i18n('entities.violence.fields.traitement'),
  },
  {
    name: 'description',
    label: i18n('entities.violence.fields.description'),
  },
  {
    name: 'idAgresseur',
    label: i18n('entities.violence.fields.idAgresseur'),
  },
  {
    name: 'objectif',
    label: i18n('entities.violence.fields.objectif'),
  },
  {
    name: 'explication',
    label: i18n('entities.violence.fields.explication'),
  },
  {
    name: 'outil',
    label: i18n('entities.violence.fields.outil'),
  },
  {
    name: 'typeAgresseur',
    label: i18n('entities.violence.fields.typeAgresseur'),
  },
  {
    name: 'nombreAgresseur',
    label: i18n('entities.violence.fields.nombreAgresseur'),
  },
  {
    name: 'genreAgresseur',
    label: i18n('entities.violence.fields.genreAgresseur'),
  },
  {
    name: 'ageAgresseur',
    label: i18n('entities.violence.fields.ageAgresseur'),
  },
  {
    name: 'idAgresse',
    label: i18n('entities.violence.fields.idAgresse'),
  },
  {
    name: 'nombreAgresse',
    label: i18n('entities.violence.fields.nombreAgresse'),
  },
  {
    name: 'typeAgresse',
    label: i18n('entities.violence.fields.typeAgresse'),
  },
  {
    name: 'genreAgresse',
    label: i18n('entities.violence.fields.genreAgresse'),
  },
  {
    name: 'ageAgresse',
    label: i18n('entities.violence.fields.ageAgresse'),
  },
  {
    name: 'action',
    label: i18n('entities.violence.fields.action'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.violence.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.violence.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
