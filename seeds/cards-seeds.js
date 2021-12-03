const Cards = require('../models/Cards');

const cardsdata = [
  {
    name: 'do stuff!',
    text: 'lorem',
    column_id: 1,
  },
  {
    name: 'do other stuff!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    column_id: 1,
  },
  {
    name: 'lorem',
    text: 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    column_id: 1,
  },
  {
    name: 'lorem 4',
    text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
    column_id: 2,
  },
  {
    name: 'emo enim ipsam',
    text: 'lorem lorem lorem lorem',
    column_id: 3,
  },
  {
    name: 'exercitationem ullam corporis suscipit',
    text: 'denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
    column_id: 4,
  },
  {
    name: 'card 3',
    text: 'lorem lorem lorem lorem',
    column_id: 5,
  },
  {
    name: 'card 4',
    text: 'lorem lorem lorem lorem',
    column_id: 6,
  },
  {
    name: 'card 5',
    text: 'lorem lorem lorem lorem',
    column_id: 7,
  },
  {
    name: 'card 6',
    text: 'lorem lorem lorem lorem',
    column_id: 8,
  },
];

const seedCards = () => Cards.bulkCreate(cardsdata);

module.exports = seedCards;
