const violenceEnumerators = {
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
  mode: ['Physique', 'Morale', 'Verbale', 'Mixte'],
  cadre: ['Urbain', 'Rural'],
  espace: ['Rue', 'Transport'],
  degre: ['Menace', 'Violence', 'Violence extrême'],
  categorie: ['Braquage', 'Viol', 'Meurtre'],
  traitement: ['En fuite', 'Judiciaire'],
  objectif: ['Agression', 'Protestation'],
  typeAgresseur: ['physique', 'Morale'],
  genreAgresseur: ['Homme', 'Femme'],
  typeAgresse: ['physique', 'Morale'],
  genreAgresse: ['Homme', 'Femme'],
  statut: ['en_attente', 'valide', 'rejete', 'archive'],
};

export default violenceEnumerators;
