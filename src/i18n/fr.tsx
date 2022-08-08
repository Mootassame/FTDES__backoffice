const fr = {
  common: {
    or: 'Ou',
    cancel: 'Annuler',
    reset: 'Réinitialiser',
    save: 'Sauvegarder',
    search: 'Chercher',
    edit: 'Éditer',
    remove: 'Retirer',
    new: 'Nouveau',
    export: 'Exporter vers Excel',
    noDataToExport: 'Aucune donnée à exporter',
    import: 'Importer',
    discard: 'Jeter',
    yes: 'Oui',
    no: 'Non',
    pause: 'Pause',
    areYouSure: 'Êtes-vous sûr?',
    view: 'Afficher',
    destroy: 'Retirer',
    mustSelectARow: 'Vous devez sélectionner une ligne',
    filters: 'Filtres',
    community: 'Communauté',
    contenuTheme: 'Contenus par thème',
    evenementTheme: 'Événements par catégorie',
    publicationTheme: 'Publications par catégorie',
    publicationOST: 'OST',
    informations: 'Informations Générales',
    manifestation: 'Manifestations',
    archive: 'Archives',
    statistiques: 'Statistiques',
    infographies: 'Infographies',
    cartesInteractives: 'Cartes Interactives',
  },
  app: {
    title: 'Al-Forum',
  },

  api: {
    menu: 'API',
  },

  entities: {
    mouvement: {
      name: 'mouvement',
      label: 'Mouvements',
      menu: 'Mouvements',
      exporterFileName: 'mouvement_export',
      list: {
        menu: 'Mouvements',
        title: 'Mouvements',
      },
      create: {
        success: 'Mouvement enregistré avec succès',
      },
      update: {
        success: 'Mouvement enregistré avec succès',
      },
      destroy: {
        success: 'Mouvement supprimé avec succès',
      },
      destroyAll: {
        success: 'Mouvement(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Mouvement',
      },
      fields: {
        id: 'Id',
        sujet: 'Sujet',
        dateRange: 'Date',
        date: 'Date',
        observation: 'Observation',
        actions: 'Actions',
        statut: 'Statut',
        createdAt: 'Crée le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Crée le',
      },
      enumerators: {
        sujet: {
          titularisation: 'Titularisation',
          no_infrastructure: `Absence d'infrastructure`,
          recrutement: 'Recrutement',
          sport: 'Sport',
          transport: 'Transport',
          environnement: 'Environnement',
          droit_eau: `Droit de l'eau`,
        },
        statut: {
          archive: 'Archivé',
          en_attente: 'En attente',
          valide: 'Validé',
          rejete: 'Rejeté',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Mouvement',
      },
      view: {
        title: 'Afficher Mouvement',
      },
      importer: {
        title: 'Importer Mouvements',
        fileName: 'mouvement_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    action: {
      name: 'action',
      label: 'Actions',
      menu: 'Actions',
      exporterFileName: 'action_export',
      list: {
        menu: 'Actions',
        title: 'Actions',
      },
      create: {
        success: 'Action enregistré avec succès',
      },
      update: {
        success: 'Action enregistré avec succès',
      },
      destroy: {
        success: 'Action supprimé avec succès',
      },
      destroyAll: {
        success: 'Action(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Action',
      },
      fields: {
        id: 'Id',
        sujet: 'Sujet',
        region: 'Région',
        type: 'Type',
        genre: 'Genre',
        categorie: 'Catégorie',
        espace: 'Espace',
        acteurs: 'Acteurs',
        description: 'Description',
        modeAction: `Mode d'action`,
        mouvement: 'Mouvement',
        suicide: 'Suicide',
        violence: 'Violence',
        createdAt: 'Crée le',
        statut: 'Statut',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Crée le',
      },
      enumerators: {
        sujet: {
          absenceInfrastructure: `Absence d'infrastructure`,
          transport: 'Transport',
        },
        region: {
          tunis: 'Gouvernorat de Tunis | ولاية تونس',
          ariana: `Gouvernorat de L'Ariana | ولاية أريانة`,
          gafsa: 'Gouvernorat de Gafsa | ولاية قفصة',
          kasserine:
            'Gouvernorat de Kasserine | ولاية القصرين',
          beja: 'Gouvernorat de Béja | ولاية باجة',
          sousse: 'Gouvernorat de Sousse | ولاية سوسة',
          monastir:
            'Gouvernorat de Monastir | ولاية المنستير',
        },
        type: {
          Collectif: 'Collectif',
          Individuel: 'Individuel',
        },
        genre: {
          Femmes: 'Femmes',
          Hommes: 'Hommes',
          Mixte: 'Mixte',
          Inconnu: 'Inconnu',
        },
        categorie: {
          'Rassemblement protestataire':
            'Rassemblement protestataire',
          Manifestation: 'Manifestation',
        },
        espace: {
          Médias: 'Médias',
          Routes: 'Routes',
          'Réseaux sociaux': 'Réseaux sociaux',
          'Espaces de travail': 'Espaces de travail',
        },
        statut: {
          archive: 'Archivé',
          en_attente: 'En attente',
          valide: 'Validé',
          rejete: 'Rejeté',
        },
        acteurs: {
          Jeunes: 'Jeunes',
          employés: 'Employés',
          eleves: 'Élèves',
          etudiants: 'Étudiants',
        },
        modeAction: {
          Instantané: 'Instantané',
          Planifié: 'Planifié',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Action',
      },
      view: {
        title: 'Afficher Action',
      },
      importer: {
        title: 'Importer Actions',
        fileName: 'action_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    suicide: {
      name: 'suicide',
      label: 'Suicides',
      menu: 'Suicides',
      exporterFileName: 'suicide_export',
      list: {
        menu: 'Suicides',
        title: 'Suicides',
      },
      create: {
        success: 'Suicide enregistré avec succès',
      },
      update: {
        success: 'Suicide enregistré avec succès',
      },
      destroy: {
        success: 'Suicide supprimé avec succès',
      },
      destroyAll: {
        success: 'Suicide(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Suicide',
      },
      fields: {
        id: 'Id',
        dateRange: 'Date',
        date: 'Date',
        region: 'Région',
        ageRange: 'Age',
        age: 'Age',
        genre: 'Genre',
        maniere: 'Manière',
        raison: 'Raison',
        espace: 'Espace',
        cible: 'Cible',
        deces: 'Décès',
        description: 'Description',
        consequence: 'Conséquence',
        action: 'Action',
        statut: 'Statut',
        createdAt: 'Crée le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Crée le',
      },
      enumerators: {
        region: {
          tunis: 'Gouvernorat de Tunis | ولاية تونس',
          ariana: `Gouvernorat de L'Ariana | ولاية أريانة`,
          gafsa: 'Gouvernorat de Gafsa | ولاية قفصة',
          kasserine:
            'Gouvernorat de Kasserine | ولاية القصرين',
          beja: 'Gouvernorat de Béja | ولاية باجة',
          sousse: 'Gouvernorat de Sousse | ولاية سوسة',
          monastir:
            'Gouvernorat de Monastir | ولاية المنستير',
        },
        statut: {
          archive: 'Archivé',
          en_attente: 'En attente',
          valide: 'Validé',
          rejete: 'Rejeté',
        },
        genre: {
          Femme: 'Femme',
          Homme: 'Homme',
        },
        maniere: {
          Pendaison: 'Pendaison',
          Immolation: 'Immolation',
        },
        raison: {
          'Conflits familiaux': 'Conflits familiaux',
          harcèlement: 'Harcèlement',
        },
        espace: {
          Domicile: 'Domicile',
          Public: 'Public',
        },
        cible: {
          Gouvernement: 'Gouvernement',
          Employeur: 'Employeur',
        },
        deces: {
          Inconnu: 'Inconnu',
          Oui: 'Oui',
          Non: 'Non',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Suicide',
      },
      view: {
        title: 'Afficher Suicide',
      },
      importer: {
        title: 'Importer Suicides',
        fileName: 'suicide_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    violence: {
      name: 'violence',
      label: 'Violences',
      menu: 'Violences',
      exporterFileName: 'violence_export',
      list: {
        menu: 'Violences',
        title: 'Violences',
      },
      create: {
        success: 'Violence enregistré avec succès',
      },
      update: {
        success: 'Violence enregistré avec succès',
      },
      destroy: {
        success: 'Violence supprimé avec succès',
      },
      destroyAll: {
        success: 'Violence(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Violence',
      },
      fields: {
        id: 'Id',
        dateRange: 'Date',
        date: 'Date',
        region: 'Région',
        type: 'Type',
        mode: 'Mode',
        cadre: 'Cadre',
        espace: 'Espace',
        degre: 'Degré',
        planifie: 'Planifié',
        categorie: 'Catégorie',
        traitement: 'Traitement',
        description: 'Description',
        idAgresseur: 'Agresseur',
        objectif: 'Objectif',
        explication: 'Explication',
        outil: 'Outil',
        statut: 'Statut',
        typeAgresseur: 'Type',
        nombreAgresseurRange: 'Nombre',
        nombreAgresseur: 'Nombre',
        genreAgresseur: 'Genre',
        ageAgresseurRange: 'Age',
        ageAgresseur: 'Age',
        idAgresse: 'Agressé',
        nombreAgresseRange: 'Nombre',
        nombreAgresse: 'Nombre',
        typeAgresse: 'Type',
        genreAgresse: 'Genre',
        ageAgresseRange: 'Age',
        ageAgresse: 'Age',
        action: 'Action',
        createdAt: 'Crée le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Crée le',
      },
      enumerators: {
        region: {
          tunis: 'Gouvernorat de Tunis | ولاية تونس',
          ariana: `Gouvernorat de L'Ariana | ولاية أريانة`,
          gafsa: 'Gouvernorat de Gafsa | ولاية قفصة',
          kasserine:
            'Gouvernorat de Kasserine | ولاية القصرين',
          beja: 'Gouvernorat de Béja | ولاية باجة',
          sousse: 'Gouvernorat de Sousse | ولاية سوسة',
          monastir:
            'Gouvernorat de Monastir | ولاية المنستير',
        },
        type: {
          Collectif: 'Collectif',
          Individuel: 'Individuel',
        },
        statut: {
          archive: 'Archivé',
          en_attente: 'En attente',
          valide: 'Validé',
          rejete: 'Rejeté',
        },
        mode: {
          Physique: 'Physique',
          Morale: 'Morale',
          Verbale: 'Verbale',
          Mixte: 'Mixte',
        },
        cadre: {
          Urbain: 'Urbain',
          Rural: 'Rural',
        },
        espace: {
          Rue: 'Rue',
          Transport: 'Transport',
        },
        degre: {
          Menace: 'Menace',
          Violence: 'Violence',
          'Violence extrême': 'Violence extrême',
        },
        categorie: {
          Braquage: 'Braquage',
          Viol: 'Viol',
          Meurtre: 'Meurtre',
        },
        traitement: {
          'En fuite': 'En fuite',
          Judiciaire: 'Judiciaire',
        },
        objectif: {
          Agression: 'Agression',
          Protestation: 'Protestation',
        },
        typeAgresseur: {
          physique: 'Physique',
          Morale: 'Morale',
        },
        genreAgresseur: {
          Homme: 'Homme',
          Femme: 'Femme',
        },
        typeAgresse: {
          physique: 'Physique',
          Morale: 'Morale',
        },
        genreAgresse: {
          Homme: 'Homme',
          Femme: 'Femme',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Violence',
      },
      view: {
        title: 'Afficher Violence',
      },
      importer: {
        title: 'Importer Violences',
        fileName: 'violence_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },
    publication: {
      name: 'publication',
      label: 'Publications',
      menu: 'Publications',
      exporterFileName: 'exportation_publication',
      list: {
        menu: 'Publications',
        title: 'Publications',
      },
      create: {
        success: 'Publication enregistré avec succès',
      },
      update: {
        success: 'Publication enregistré avec succès',
      },
      destroy: {
        success: 'Publication supprimé avec succès',
      },
      destroyAll: {
        success: 'Publication(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Publication',
      },
      fields: {
        id: 'Id',
        thematique: 'Thématique',
        categorie: 'Catégorie',
        type: 'Type',
        supports: 'Supports',
        description: 'Description',
        statut: 'Statut',
        dateRange: 'Date',
        date: 'Date',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        categorie: {
          Manifestation: 'Manifestation',
          'article scientifique': 'Article scientifique',
          'article journalistique':
            'Article journalistique',
          rapport: 'Rapport',
          entretien: 'Entretien',
          'données numériques': 'Données numériques',
          autre: 'Autre',
        },

        type: {
          Texte: 'Texte',
          audio: 'Audio',
          vidéo: 'Vidéo',
          'lien web': 'Lien web',
          photo: 'Photo',
          infographie: 'Infographie',
          statistiques: 'Statistiques',
          autre: 'Autre',
        },
        statut: {
          archive: 'Archivé',
          en_attente: 'En attente',
          valide: 'Validé',
          rejete: 'Rejeté',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Publication',
      },
      view: {
        title: 'Afficher Publication',
      },
      importer: {
        title: 'Importer Publications',
        fileName: 'publication_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },
    categoryPublication: {
      name: 'categoryPublication',
      label: 'Catégorie Publications',
      menu: 'Catégorie Publications',
      exporterFileName: 'categoryPublication_export',
      list: {
        menu: 'Catégorie Publications',
        title: 'Catégorie Publications',
      },
      create: {
        success:
          'Catégorie Publication enregistré avec succès',
      },
      update: {
        success:
          'Catégorie Publication enregistré avec succès',
      },
      destroy: {
        success:
          'Catégorie Publication supprimé avec succès',
      },
      destroyAll: {
        success:
          'Catégorie Publication(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Catégorie Publication',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        description: 'Description',
        publications: 'Publications',
        createdAt: 'Crée le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Crée le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Catégorie Publication',
      },
      view: {
        title: 'Afficher Catégorie Publication',
      },
      importer: {
        title: 'Importer Catégorie Publications',
        fileName: 'categoryPublication_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    categoryAppel: {
      name: 'categoryAppel',
      label: 'Catégorie Appel',
      menu: 'Catégorie Appel',
      exporterFileName: 'categoryAppel_export',
      list: {
        menu: 'Catégorie Appel',
        title: 'Catégorie Appel',
      },
      create: {
        success: 'Catégorie Appel enregistré avec succès',
      },
      update: {
        success: 'Catégorie Appel enregistré avec succès',
      },
      destroy: {
        success: 'Catégorie Appel supprimé avec succès',
      },
      destroyAll: {
        success: 'Catégorie Appel(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Catégorie Appel',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        description: 'Description',
        demandeAppui: 'DemandeAppui',
        createdAt: 'Crée le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Crée le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Catégorie Appel',
      },
      view: {
        title: 'Afficher Catégorie Appel',
      },
      importer: {
        title: 'Importer Catégorie Appels',
        fileName: 'categoryAppel_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    forum: {
      name: 'forum',
      label: 'Forums',
      menu: 'Forums',
      exporterFileName: 'exportation_forum',
      list: {
        menu: 'Forums',
        title: 'Forums',
      },
      create: {
        success: 'Forum enregistré avec succès',
      },
      update: {
        success: 'Forum enregistré avec succès',
      },
      destroy: {
        success: 'Forum supprimé avec succès',
      },
      destroyAll: {
        success: 'Forum(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Forum',
      },
      fields: {
        id: 'Id',
        titre: 'Titre',
        sujet: 'Sujet',
        visibilite: 'Visibilité',
        statut: 'Statut',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        visibilite: {
          Ouverte: 'Ouverte',
          Fermee: 'Fermée',
        },
        statut: {
          en_attente: 'En attente',
          valide: 'Validé',
          rejete: 'Rejeté',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Forum',
      },
      view: {
        title: 'Afficher Forum',
      },
      importer: {
        title: 'Importer Forums',
        fileName: 'forum_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    demandeAppui: {
      name: 'demandeAppui',
      label: `Appels`,
      menu: `Appels`,
      exporterFileName: 'exportation_demandeAppui',
      list: {
        menu: `Appels`,
        title: `Appels`,
      },
      create: {
        success: `Appel enregistré avec succès`,
      },
      update: {
        success: `Appel enregistré avec succès`,
      },
      destroy: {
        success: `Appel supprimé avec succès`,
      },
      destroyAll: {
        success: `Appel(s) supprimé avec succès`,
      },
      edit: {
        title: `Éditer Appel`,
      },
      fields: {
        id: 'Id',
        type: 'Type',
        etat: 'État',
        gouvernorat: 'Gouvernorat',
        importance: 'Importance',
        description: 'Description',
        supports: 'Supports',
        createdAt: 'Créé le',
        categorie: 'Categorie',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        type: {
          Legal: 'Légal',
          logistique: 'Logistique',
        },
        etat: {
          En_ligne: 'En ligne',
          physique: 'Physique',
        },

        importance: {
          Haute: 'Haute',
          modere: 'Modéré',
          normale: 'Normale',
        },
        gouvernorat: {
          tunis: 'Tunis',
          ariana: 'Ariana',
          beja: 'Beja',
          ben_arouss: 'Ben arouss',
          bizerte: 'Bizerte',
          gabes: 'Gabes',
          gafsa: 'Gafsa',
          jendouba: 'Jendouba',
          kairouan: 'Kairouan',
          kasserine: 'Kasserine',
          kebili: 'Kebili',
          kef: 'kef',
          mahdia: 'Mahdia',
          manouba: 'Manouba',
          medenine: 'Medenine',
          monastir: 'Monastir',
          nabeul: 'Nabeul',
          sfax: 'Sfax',
          sidi_bouzid: 'Sidi bouzid',
          siliana: 'Siliana',
          sousse: 'Sousse',
          tataouine: 'Tataouine',
          tozeur: 'Tozeur',
          zaghouan: 'Zaghouan',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: `Nouvelle Appel`,
      },
      view: {
        title: `Afficher Appel`,
      },
      importer: {
        title: `Importer Appels`,
        fileName: 'demandeAppui_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    evenement: {
      name: 'evenement',
      label: 'Evénements',
      menu: 'Evénements',
      exporterFileName: 'exportation_evenement',
      list: {
        menu: 'Evénements',
        title: 'Evénements',
      },
      create: {
        success: 'Evénement enregistré avec succès',
      },
      update: {
        success: 'Evénement enregistré avec succès',
      },
      destroy: {
        success: 'Evénement supprimé avec succès',
      },
      destroyAll: {
        success: 'Evénement(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Evénement',
      },
      fields: {
        id: 'Id',
        thematique: 'Thématique',
        categorie: 'Catégorie',
        type: 'Type',
        supports: 'Supports',
        description: 'Description',
        dateRange: 'Date',
        date: 'Date',
        statut: 'Statut',
        emplacement: 'Emplacement',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        categorie: {
          Cérémonies: 'Cérémonies',
          Manifestation: 'Manifestation',
        },
        type: {
          texte: 'Texte',
          audio: 'Audio',
          vidéo: 'Vidéo',
          lien_web: 'Lien web',
          photo: 'Photo',
          infographie: 'Infographie',
          statistiques: 'Statistiques',
        },

        statut: {
          archive: 'Archivé',
          en_attente: 'En attente',
          valide: 'Validé',
          rejete: 'Rejeté',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvel Evénement',
      },
      view: {
        title: 'Afficher Evénement',
      },
      importer: {
        title: 'Importer Evénements',
        fileName: 'evenement_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    categoryEvenement: {
      name: 'categoryEvenement',
      label: 'Catégories Evènements',
      menu: 'Catégories Evènements',
      exporterFileName: 'categoryPublication_export',
      list: {
        menu: 'Catégorie Evènements',
        title: 'Catégorie Evènements',
      },
      create: {
        success:
          'Catégorie Evènement enregistré avec succès',
      },
      update: {
        success:
          'Catégorie Evènement enregistré avec succès',
      },
      destroy: {
        success: 'Catégorie Evènement supprimé avec succès',
      },
      destroyAll: {
        success:
          'Catégorie Evènement(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Catégorie Evènement',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        description: 'Description',
        publications: 'Publications',
        createdAt: 'Crée le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Crée le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Catégorie Evènement',
      },
      view: {
        title: 'Afficher Catégorie Evènement',
      },
      importer: {
        title: 'Importer Catégorie Evènements',
        fileName: 'categoryPublication_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    thematique: {
      name: 'thematique',
      label: 'Thématiques',
      menu: 'Thématiques',
      exporterFileName: 'exportation_thematique',
      list: {
        menu: 'Thématiques',
        title: 'Thématiques',
      },
      create: {
        success: 'Thématique enregistré avec succès',
      },
      update: {
        success: 'Thématique enregistré avec succès',
      },
      destroy: {
        success: 'Thématique supprimé avec succès',
      },
      destroyAll: {
        success: 'Thématique(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Thématique',
      },
      fields: {
        id: 'Id',
        titre: 'Titre',
        description: 'Description',
        tags: 'Tags',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Thématique',
      },
      view: {
        title: 'Afficher Thématique',
      },
      importer: {
        title: 'Importer Thématiques',
        fileName: 'thematique_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    tags: {
      name: 'tags',
      label: 'Tags',
      menu: 'Tags',
      exporterFileName: 'exportation_tags',
      list: {
        menu: 'Tags',
        title: 'Tags',
      },
      create: {
        success: 'Tags enregistré avec succès',
      },
      update: {
        success: 'Tags enregistré avec succès',
      },
      destroy: {
        success: 'Tags supprimé avec succès',
      },
      destroyAll: {
        success: 'Tags(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Tags',
      },
      fields: {
        id: 'Id',
        titre: 'Titre',
        description: 'Description',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Tags',
      },
      view: {
        title: 'Afficher Tags',
      },
      importer: {
        title: 'Importer Tags',
        fileName: 'tags_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    artiste: {
      name: 'artiste',
      label: 'Artistes',
      menu: 'Artistes',
      exporterFileName: 'exportation_artiste',
      list: {
        menu: 'Artistes',
        title: 'Artistes',
      },
      create: {
        success: 'Artiste enregistré avec succès',
      },
      update: {
        success: 'Artiste enregistré avec succès',
      },
      destroy: {
        success: 'Artiste supprimé avec succès',
      },
      destroyAll: {
        success: 'Artiste(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Artiste',
      },
      fields: {
        id: 'Id',
        nom: 'Nom',
        prenom: 'Prènom',
        domaine: 'Domaine',
        adresse: 'Adresse',
        email: 'Email',
        phoneNumberRange: 'Numéro de téléphone',
        phoneNumber: 'Numéro de téléphone',
        espaceArtistique: 'Espace Artistique',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvel Artiste',
      },
      view: {
        title: 'Afficher Artiste',
      },
      importer: {
        title: 'Importer Artistes',
        fileName: 'artiste_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    espaceArtistique: {
      name: 'espaceArtistique',
      label: 'Espaces Artistiques',
      menu: 'Espaces Artistiques',
      exporterFileName: 'exportation_espaceArtistique',
      list: {
        menu: 'Espaces Artistiques',
        title: 'Espaces Artistiques',
      },
      create: {
        success: 'Espace Artistique enregistré avec succès',
      },
      update: {
        success: 'Espace Artistique enregistré avec succès',
      },
      destroy: {
        success: 'Espace Artistique supprimé avec succès',
      },
      destroyAll: {
        success:
          'Espace Artistique(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Espace Artistique',
      },
      fields: {
        id: 'Id',
        artiste: 'Artiste',
        supports: 'Supports',
        titre: 'Titre',
        description: 'Description',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvel Espace Artistique',
      },
      view: {
        title: 'Afficher Espace Artistique',
      },
      importer: {
        title: 'Importer Espaces Artistiques',
        fileName: 'espaceArtistique_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },

    domaine: {
      name: 'domaine',
      label: 'Domaine',
      menu: 'Domaine',
      exporterFileName: 'exportation_domaine',
      list: {
        menu: 'Domaine',
        title: 'Domaine',
      },
      create: {
        success: 'Domaine enregistré avec succès',
      },
      update: {
        success: 'Domaine enregistré avec succès',
      },
      destroy: {
        success: 'Domaine supprimé avec succès',
      },
      destroyAll: {
        success: 'Domaine(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Domaine',
      },
      fields: {
        id: 'Id',
        artiste: 'Artistes',
        title: 'Titre',
        description: 'Description',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Domaine',
      },
      view: {
        title: 'Afficher Domaine',
      },
      importer: {
        title: 'Importer Espaces Artistiques',
        fileName: 'espaceArtistique_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },
    mediatique: {
      name: 'mediatique',
      label: 'Médiathèques',
      menu: 'Médiathèques',
      exporterFileName: 'exportation_mediatique',
      list: {
        menu: 'Médiathèques',
        title: 'Médiathèques',
      },
      create: {
        success: 'Médiathèque enregistré avec succès',
      },
      update: {
        success: 'Médiathèque enregistré avec succès',
      },
      destroy: {
        success: 'Médiathèque supprimé avec succès',
      },
      destroyAll: {
        success: 'Médiathèque(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Médiathèque',
      },
      fields: {
        id: 'Id',
        title: 'Titre',
        description: 'Description',
        type: 'Type',
        photos: 'Photos',
        videos: 'Vidéos',
        attachements: 'Attachements',
        createdAt: 'Crée le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Crée le',
      },
      enumerators: {
        type: {
          poadcast: 'Poadcast',
          documentaire: 'Documentaire',
          videos: 'Vidéos',
          printers: 'Printers',
          exposition: 'Exposition',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Médiathèque',
      },
      view: {
        title: 'Afficher Médiathèque',
      },
      importer: {
        title: 'Importer Médiathèques',
        fileName: 'mediatique_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },
    apropos: {
      name: 'Configuration',
      label: 'Configuration',
      menu: 'Configuration',
      exporterFileName: 'Configuration_export',
      list: {
        menu: 'Configuration',
        title: 'Configuration',
      },
      create: {
        success: 'Configuration enregistré avec succès',
      },
      update: {
        success: 'Configuration enregistré avec succès',
      },
      destroy: {
        success: 'Configuration supprimé avec succès',
      },
      destroyAll: {
        success: 'Configuration(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Configuration',
      },
      fields: {
        id: 'Id',
        about: 'À propos de nous',
        objectifs: 'Objectifs',
        services: 'Services',
        contacts: 'Contacts',
        tutorial: 'Tutorial',
        publicationDesc: 'Description Publication',
        appelDesc: 'Description Appel',
        forumDesc: 'Description Forum',
        mouvementDesc: 'Description Mouvement',
        mediatequeDesc: 'Description Mediateque',
        createdAt: 'Crée le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Crée le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Configuration',
      },
      view: {
        title: 'Afficher Configuration',
      },
      importer: {
        title: 'Importer Configuration',
        fileName: 'Configuration_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces.',
      },
    },
  },
  auth: {
    tenants: 'Espaces de travail',
    profile: {
      title: 'Profil',
      success: 'Mise à jour du profil réussie',
    },
    createAnAccount: 'Créer un compte',
    rememberMe: 'Souviens-toi de moi',
    forgotPassword: 'Mot de passe oublié?',
    signin: `Se connecter`,
    signup: `S'inscrire`,
    signout: 'Déconnecter',
    alreadyHaveAnAccount: `Avez-vous déjà un compte? Se connecter.`,
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Connectez-vous avec un autre compte',
    passwordChange: {
      title: 'Changer le mot de passe',
      success: 'Le mot de passe a été changé avec succès',
      mustMatch: 'Les mots de passe doivent correspondre',
    },
    emailUnverified: {
      message: `Veuillez confirmer votre adresse e-mail à l'adresse <strong>{0}</strong> pour continuer.`,
      submit: 'Renvoyer la vérification par e-mail',
    },
    emptyPermissions: {
      message: `Vous n'avez pas encore les autorisations. Attendez que l'administrateur vous accorde des privilèges.`,
    },
    passwordResetEmail: {
      message:
        'Envoyer un e-mail de réinitialisation du mot de passe',
      error: 'E-mail non reconnu',
    },
    passwordReset: {
      message: 'Réinitialisez votre mot de passe',
    },
    emailAddressVerificationEmail: {
      error: 'E-mail non reconnu',
    },
    verificationEmailSuccess:
      'E-mail de vérification envoyé avec succès',
    passwordResetEmailSuccess:
      'E-mail de réinitialisation du mot de passe envoyé avec succès',
    passwordResetSuccess:
      'Le mot de passe a été changé avec succès',
    verifyEmail: {
      success: 'E-mail vérifié avec succès.',
      message:
        'Juste un instant, votre email est en cours de vérification ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espaces de travail',
    menu: 'Espaces de travail',
    list: {
      menu: 'Espaces de travail',
      title: 'Espaces de travail',
    },
    create: {
      button: 'Créer un espace de travail',
      success: 'Espace de travail enregistré avec succès',
    },
    update: {
      success: 'Espace de travail enregistré avec succès',
    },
    destroy: {
      success: 'Espace de travail supprimé avec succès',
    },
    destroyAll: {
      success:
        'Espace(s) de travail supprimé(s) avec succès',
    },
    edit: {
      title: 'Éditer espace de travail',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: `Nom de l'espace de travail`,
      tenantId: 'Espace de travail',
      tenantUrl: `URL de l'espace de travail`,
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nouvel espace de travail',
    },
    invitation: {
      view: 'Afficher invitations',
      invited: 'Invité',
      accept: `Accepter l'invitation`,
      decline: `Refuser l'invitation`,
      declined: 'Invitation refusée avec succès',
      acceptWrongEmail: `Accepter l'invitation avec cet e-mail`,
    },
    select: `Sélectionnez l'espace de travail`,
    validation: {
      url: `L'URL de votre espace de travail ne peut contenir que des lettres minuscules, des chiffres et des tirets (et doit commencer par une lettre ou un chiffre).`,
    },
  },
  roles: {
    Super_admin: {
      label: 'Equipe technique',
      description: 'Accès complet à toutes les ressources.',
    },
    admin: {
      label: 'Administration',
      description: 'Accès complet à toutes les ressources.',
    },

    admin_OST: {
      label: 'Administrateur OST ',
      description:
        'Accès complet à toutes les actions possibles dans la page OST.',
    },

    createur_OST: {
      label: 'Créateur contenu OST ',
      description:
        'Saisie des données, traiter les alertes … .',
    },

    admin_Migration: {
      label: 'Administrateur Migration  ',
      description:
        'Accès complet à toutes les actions possibles dans la page Migration .',
    },

    createur_Migration: {
      label: 'Créateur contenu Migration ',
      description:
        'Saisie des données, traiter les alertes … .',
    },

    createur_Contenu: {
      label: 'Créateur contenu ',
      description: 'Ajouter toutes formes de contenu .',
    },

    createur_thématique: {
      label: 'Créateur contenu thématique',
      description: 'Environnement, Economie, ESS … .',
    },

    createur_région: {
      label: 'Créateur contenu région',
      description:
        ' Créer du contenu pour les sections du FTDES .',
    },

    custom: {
      label: 'Rôle personnalisé',
      description: 'Accès personnalisé aux ressources',
    },
  },
  user: {
    invite: 'Invitation',
    title: 'Utilisateurs',
    menu: 'Utilisateurs',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nom complet',
      firstName: 'Prènom',
      lastName: 'Nom',
      status: 'Statut',
      fonction: 'Fonction',
      pays: 'Pays',
      region: 'Région',
      disabled: 'Inactif',
      phoneNumber: 'Numéro de téléphone',
      role: 'Rôle',
      createdAt: 'Créé le',
      updatedAt: 'Mis à jour le',
      roleUser: 'Rôle',
      roles: 'Rôles',
      createdAtRange: 'Créé le',
      password: 'Mot de passe',
      rememberMe: 'Souviens-toi de moi',
      oldPassword: 'Ancien mot de passe',
      newPassword: 'Nouveau mot de passe',
      newPasswordConfirmation:
        'Confirmation du nouveau mot de passe',
    },
    enumerators: {
      pays: {
        tunisie: 'Tunisie',
        algeria: 'Algérie',
        maroc: 'Maroc',
        mauritanie: 'Mauritanie',
        turquie: 'Turquie',
      },
      region: {
        tunis: 'Gouvernorat de Tunis | ولاية تونس',
        ariana: `Gouvernorat de L'Ariana | ولاية أريانة`,
        gafsa: 'Gouvernorat de Gafsa | ولاية قفصة',
        kasserine:
          'Gouvernorat de Kasserine | ولاية القصرين',
        beja: 'Gouvernorat de Béja | ولاية باجة',
        sousse: 'Gouvernorat de Sousse | ولاية سوسة',
        monastir:
          'Gouvernorat de Monastir | ولاية المنستير',
      },
      fonction: {
        Journaliste: 'Journaliste',
        Citoyen: 'Citoyen',
        Chercheur: 'Chercheur',
      },
    },

    enabled: 'Activé',
    disabled: 'Désactivé',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} non valide .',
    },
    disable: 'Désactiver',
    enable: 'Activer',
    doEnableSuccess: 'Utilisateur activé avec succès',
    doDisableSuccess: 'Utilisateur désactivé avec succès',
    doDisableAllSuccess:
      'Utilisateur(s) désactivé(s) avec succès',
    doEnableAllSuccess:
      'Utilisateur(s) activé(s) avec succès',
    doAddSuccess:
      'Utilisateur(s) enregistré(s) avec succès',
    doUpdateSuccess: 'Utilisateur enregistré avec succès',
    status: {
      active: 'Actif',
      invited: 'Invité',
      'empty-permissions': 'En attente de permission',
    },
    exporterFileName: 'usuarios_exportation',
    doDestroySuccess: 'Utilisateur supprimé avec succès',
    doDestroyAllSelectedSuccess:
      'Utilisateur(s) supprimé(s) avec succès',
    edit: {
      title: 'Éditer Utilisateur',
    },
    new: {
      title: 'Inviter Utilisateur(s)',
      titleModal: 'Nouvel Utilisateur',
      emailsHint: `Séparez plusieurs adresses e-mail à l'aide du caractère virgule`,
    },
    view: {
      title: 'Afficher Utilisateur',
      activity: 'Activité',
    },
    importer: {
      title: 'Importer Utilisateurs',
      fileName: 'users_import_template',
      hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par des espaces. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists: `L'utilisateur avec cet email existe déjà`,
      userNotFound: 'Utilisateur pas trouvé',
      disablingHimself:
        'Vous ne pouvez pas vous désactiver',
      revokingOwnPermission: `Vous ne pouvez pas révoquer votre propre autorisation d'administrateur`,
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratuit',
      price: '$0',
    },
    growth: {
      label: 'Augmenter',
      price: '$10',
    },
    enterprise: {
      label: 'Compagnie',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Audit log',
    title: 'Audit log',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Séparez plusieurs entités avec le caractère virgule.',
    fields: {
      id: 'Id',
      timestampRange: 'Période',
      entityName: 'Entité',
      entityNames: 'Entités',
      entityId: 'Entité Id',
      action: 'Action',
      values: 'Valeurs',
      timestamp: 'Date',
      createdByEmail: `Adresse e-mail de l'utilisateur`,
    },
  },
  settings: {
    title: 'Réglages',
    menu: 'Réglages',
    save: {
      success:
        'Configuration enregistrée avec succès. La page se rechargera dans {0} secondes pour que les modifications prennent effet.',
    },
    fields: {
      theme: 'Thème',
      logos: 'Logo',
      backgroundImages: 'Image de fond',
    },
    colors: {
      default: 'Défaut',
      amber: 'Ambre',
      blue: 'bleu',
      cyan: 'Cyan',
      deep_orange: 'Orange intense',
      deep_purple: 'Violet foncé',
      green: 'Vert',
      indigo: 'Indigo',
      light_blue: 'Bleu clair',
      light_green: 'Vert clair',
      lime: 'Citron vert',
      orange: 'Orangé',
      pink: 'Rose',
      purple: 'Violet',
      red: 'Rouge',
      teal: 'Vert bleuâtre',
      yellow: 'Jaune',
      grey: 'Gris',
      blue_grey: 'Gris bleuté',
      brown: 'Marron',
    },
  },
  dashboard: {
    // empty dasbord translate plz //
    chart: {
      title: 'Mon graphique',
      content:
        'Aucune donnée à afficher pour la période sélectionnée',
    },

    //General

    informations: 'Nombre total des informations',
    news: 'Nombre total des actualités',
    testimony: 'Nombre total des témoignages',
    assistance: "Nombre total des demandes d'assistance",
    partner: 'Nombre total des partenaires',
    reclamationNumber: 'Nombre total des reclamations',
    //menue Dashboard
    testimonys: 'Tableau de bord Témoignage',
    asssistance: 'Tableau de bord Assistance',
    general: 'Tableau de bord Général',
    reclamation: 'Tableau de bord Reclamations',

    //
    menu: 'Tableau de bord',
    message:
      'Cette page utilise de fausses données à des fins de démonstration uniquement. Vous pouvez le modifier dans frontend/src/app/dashboard/components/dashboard.component.html',
    charts: {
      day: 'Jour',
      red: 'Rouge',
      green: 'Vert',
      yellow: 'Jaune',
      grey: 'Gris',
      blue: 'Bleu',
      orange: 'Orangé',
      months: {
        '1': 'Janvier',
        '2': 'Février',
        '3': 'Mars',
        '4': 'Avril',
        '5': 'Mai',
        '6': 'Juin',
        '7': 'Juillet',
        '8': 'Août',
        '9': 'Septembre',
        '10': 'Octobre',
        '11': 'Novembre',
        '12': 'Décembre',
      },
    },

    text: {
      region: 'Statistique des témoignages par Région',
      assign: 'Statistique des témoignages par membre',
      anonymous: 'Statistique des témoignages par Anonyme',
      partenar:
        'Statistique des témoignages par Partenaire',
      status: 'Statistique des témoignages par Statut',
      category: 'Statistique des témoignages par Catégorie',
    },

    text_dashboard: {
      region: 'Statistique des assistances par Région',
      assign: 'Statistique des assistances par membre',
      anonymous: 'Statistique des assistances par Anonyme',
      partenar:
        'Statistique des assistances par Partenaire',
      status: 'Statistique des assistances par Statut',
      category: 'Statistique des assistances par Catégorie',
      reclamationCountry:
        'Statistique des reclamation par Pays',
      reclamationStatus:
        'Statistique des reclamation par Status',
      reclamationAge:
        'Statistique des reclamations par Age',
    },
    status: {
      open: 'En cours',
      closed: 'Fermé',
      waitting: 'En attente',
      canceled: 'Annulé',
    },
    priority: {
      low: 'Faible',
      medium: 'Moyenne',
      hight: 'Haute',
    },
    assign: {
      save: 'Attribuer cette tâche pour moi ',
      view: 'Cliquez pour afficher plus de détails sur cette tâche',

      cancel: 'Revenir pour choisir une autre tâche',
    },
    notification: {
      view: 'a ajouté un nouveau témoignage',
      reclamation: 'a ajouté une nouvelle réclamation',
      activityReclamation:
        'a envoyé un nouveau commentaire',
      activity: 'a envoyé une nouvelle activité',
    },
  },
  errors: {
    '403': "Désolé, vous n'avez pas accès à cette page",
    '404':
      "Désolé, la page que vous avez visitée n'existe pas",
    '500': 'Désolé, le serveur signale une erreur',
    '429':
      'Trop de demandes. Veuillez réessayer plus tard.',
    backToHome: `Revenir à la page d'acceuil`,
    forbidden: {
      message: 'Interdit',
    },
    validation: {
      message: "Une erreur s'est produite",
    },
    defaultErrorMessage: "Ops, une erreur s'est produite",
  },
  /* eslint-disable */
  validation: {
    mixed: {
      default: "${path} n'est pas valide",
      required: '${path} est obligatoire',
      oneOf:
        "${path} doit être l'une des valeurs suivantes: ${values}",
      notOneOf:
        "${path} no doit être l'une des valeurs suivantes: ${values}",
      // notType: ({ path, type, value, originalValue }) => {
      //   return `${path} Doit être un ${type}`;
      // },
    },
    string: {
      length:
        '${path} doit avoir exactement ${length} caractères',
      min: '${path} doit avoir au moins ${min} caractères',
      max: '${path} doit avoir au plus ${max} caractères',
      matches:
        '${path} doit correspondre à ce qui suit: "${regex}"',
      email: '${path} doit être un email valide',
      url: '${path} doit être une URL valide',
      trim: '${path} doit être une chaîne coupée',
      lowercase:
        '${path} doit être une chaîne en minuscules',
      uppercase:
        '${path} doit être une chaîne en majuscules',
      selected: '${path} doit être sélectionné',
    },
    number: {
      min: '${path} doit être supérieur ou égal à ${min}',
      max: '${path} doit être inférieur ou égal à ${max}',
      lessThan: '${path} doit être inférieur à ${less}',
      moreThan: '${path} doit être supérieur à ${more}',
      notEqual:
        '${path} ne doit pas être égal à ${notEqual}',
      positive: '${path} Doit être un nombre positif',
      negative: '${path} Doit être un nombre négatif',
      integer: '${path} doit être un nombre entier',
    },
    date: {
      min: 'La campagne ${path} doit être après ${min}',
      max: 'La campagne ${path} doit être Ancien a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        "La campagne ${path} ne peut pas avoir de clés non spécifiées dans la forme de l'objet",
    },
    array: {
      min: 'La campagne ${path} doit avoir au moins ${min} éléments',
      max: 'La campagne ${path} doit avoir des éléments inférieurs ou égaux à ${max}',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Uploader',
    image: 'Vous devez télécharger une image',
    size: 'Le fichier est très volumineux. La taille maximale autorisée est {0}',
    formats: "Format invalide. Il doit être l'un des: {0}.",
  },
  importer: {
    line: 'Ligne',
    status: 'Statut',
    pending: 'En attente',
    imported: 'Importé',
    error: 'Erreur',
    total: '{0} importé, {1} en attente et {2} avec erreur',
    importedMessage: 'Traité {0} de {1}.',
    noNavigateAwayMessage:
      "Veuillez ne pas quitter cette page ou l'importation s'arrêtera.",
    completed: {
      success:
        'Importation terminée. Toutes les lignes ont été importées avec succès.',
      someErrors:
        "Traitement terminé, mais certaines lignes n'ont pas pu être importées.",
      allErrors:
        "L'importation a échoué. Il n'y a pas de lignes valides.",
    },
    form: {
      downloadTemplate: 'Téléchargez le modèle',
      hint: 'Cliquez ou faites glisser le fichier dans cette zone pour continuer.',
    },
    list: {
      discardConfirm:
        'Vous êtes sûr? Les données non importées seront perdues.',
    },
    errors: {
      invalidFileEmpty: 'Le fichier est vide',
      invalidFileExcel:
        'Seuls les fichiers Excel (.Xlsx) sont autorisés',
      invalidFileUpload:
        'Fichier non valide. Assurez-vous que vous utilisez la dernière version du template.',
      importHashRequired: 'Importer le hachage requis',
      importHashExistent:
        'Les données ont déjà été importées',
    },
  },
  paginator: {
    itemsPerPageLabel: 'Objets par page:',
    nextPageLabel: 'Page suivante',
    previousPageLabel: 'Page précédente ',
    firstPageLabel: 'Première page',
    lastPageLabel: 'Dernière page',
    getRangeLabel: {
      zero: '0 de {0}',
      interval: '{0} - {1} de {2}',
    },
  },
  datetime: {
    upSecondLabel: 'Ajouter une seconde',
    downSecondLabel: 'Moins une seconde',
    upMinuteLabel: 'Ajouter une minute',
    downMinuteLabel: 'Moins une minute',
    upHourLabel: 'Ajouter une heure',
    downHourLabel: 'Moins une heure',
    prevMonthLabel: 'le mois précédent',
    nextMonthLabel: 'Mois suivant',
    prevYearLabel: "L'année précédente ",
    nextYearLabel: "L'année prochaine",
    prevMultiYearLabel: '21 années précédentes',
    nextMultiYearLabel: '21 prochaines années',
    switchToMonthViewLabel: 'Passer à la vue mensuelle',
    switchToMultiYearViewLabel:
      "Choisissez le mois et l'année",
    cancelBtnLabel: 'Annuler',
    setBtnLabel: 'Ensemble',
    rangeFromLabel: 'De',
    rangeToLabel: 'A',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },
  table: {
    noData: 'Aucune donnée',
    loading: 'Chargement...',
  },
  autocomplete: {
    loading: 'Chargement...',
  },
  imagesViewer: {
    noImage: 'Sans image',
  },
};

export default fr;
