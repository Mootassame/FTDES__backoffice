import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    id: '0',
    path: '/',
    exact: true,
    icon: 'fa-solid fa-chalkboard-user',
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },
  {
    id: '1',
    path: '/user',
    permissionRequired: permissions.userRead,
    icon: 'fa-solid fa-users',
    label: i18n('user.menu'),
  },

  config.isPlanEnabled && {
    id: '6',
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: 'fas fa-credit-card',
    label: i18n('plan.menu'),
  },
  {
    id: '2',
    path: '#publication',
    permissionRequired: permissions.publicationRead,
    icon: 'fa fa-film',
    label: i18n('entities.publication.menu'),
    haveSubMenu: true,
    subPaths: [
      '/publication',
      '/category-publication',
      '/categoryAppel',
      '/demande-appui',
    ],
    subMenu: [
      {
        path: '/publication',
        permissionRequired: permissions.publicationRead,
        icon: 'fa-solid fa-laptop-file',

        label: i18n('entities.publication.menu'),
      },

      {
        path: '/demande-appui',
        permissionRequired: permissions.demandeAppuiRead,
        icon: 'fa-solid fa-pen-to-square',
        label: i18n('entities.demandeAppui.menu'),
      },
    ],
  },
  {
    id: '6',
    path: '#OST',
    permissionRequired: permissions.espaceArtistiqueRead,
    icon: 'fas fa-chevron-right',
    label: i18n('common.publicationOST'),
    haveSubMenu: true,
    subPaths: ['/mouvement', '/suicide', '/violence'],
    subMenu: [
      {
        path: '/mouvement',
        permissionRequired: permissions.mouvementRead,
        icon: 'fa-solid fa-people-group',
        label: i18n('entities.mouvement.menu'),
      },
      {
        path: '/suicide',
        permissionRequired: permissions.suicideRead,
        icon: 'fa-solid fa-person-falling',
        label: i18n('entities.suicide.menu'),
      },
      {
        path: '/violence',
        permissionRequired: permissions.violenceRead,
        icon: 'fa-solid fa-person-harassing',
        label: i18n('entities.violence.menu'),
      },
    ],
  },
  {
    id: '3',
    path: '#evenement',
    permissionRequired: permissions.evenementRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.evenement.menu'),
    haveSubMenu: true,
    subPaths: ['/evenement', '/category-evenement'],
    subMenu: [
      {
        path: '/evenement',
        permissionRequired: permissions.evenementRead,
        icon: 'fa-solid fa-file-invoice',
        label: i18n('entities.evenement.menu'),
      },

      {
        path: '/category-evenement',
        permissionRequired:
          permissions.categoryEvenementRead,
        icon: 'fas fa-th-large',
        label: i18n('entities.evenement.fields.categorie'),
      },
    ],
  },
  {
    id: '4',
    path: '#theme',
    permissionRequired: permissions.thematiqueRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.thematique.menu'),
    haveSubMenu: true,
    subPaths: ['/thematique', '/tags'],
    subMenu: [
      {
        path: '/thematique',
        permissionRequired: permissions.thematiqueRead,
        icon: 'fa-solid fa-code-branch',
        label: i18n('entities.thematique.menu'),
      },
      {
        path: '/tags',
        permissionRequired: permissions.tagsRead,
        icon: 'fa-solid fa-tag',
        label: i18n('entities.tags.menu'),
      },
    ],
  },
  {
    id: '5',
    path: '/mediatique',
    permissionRequired: permissions.mediatiqueRead,
    icon: 'fa-solid fa-masks-theater',
    label: i18n('entities.mediatique.menu'),
  },
].filter(Boolean);
