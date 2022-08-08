import Roles from 'src/security/roles';

const userEnumerators = {
  status: ['active', 'invited', 'empty-permissions'],
  roles: Object.keys(Roles.values),
  fonction: ['Journaliste', 'Citoyen', 'Chercheur'],
  region: [
    'tunis',
    'ariana',
    'gafsa',
    'kasserine',
    'beja',
    'sousse',
    'monastir',
  ],
  pays: [
    'tunisie',
    'algeria',
    'maroc',
    'mauritanie',
    'turquie',
  ],
};

export default userEnumerators;
