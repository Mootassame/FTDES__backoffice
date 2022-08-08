const actionEnumerators = {
  sujet: ['absenceInfrastructure', 'transport'],
  region: [
    'tunis',
    'ariana',
    'gafsa',
    'kasserine',
    'beja',
    'sousse',
    'monastir',
  ],
  type: ['Collectif', 'Individuel'],
  genre: ['Femmes', 'Hommes', 'Mixte', 'Inconnu'],
  categorie: [
    'Rassemblement protestataire',
    'Manifestation',
  ],
  espace: [
    'Médias',
    'Routes',
    'Réseaux sociaux',
    'Espaces de travail',
  ],
  acteurs: ['Jeunes', 'employés', 'eleves', 'etudiants'],
  modeAction: ['Instantané', 'Planifié'],
  statut: ['en_attente', 'valide', 'rejete', 'archive'],
};

export default actionEnumerators;
