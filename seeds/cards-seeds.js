const Cards = require('../models/Cards');

const cardsdata = [
  {
    name: 'Numbers',
    text: '1-100',
    column_id: 1,
  },
  {
    name: 'Questions',
    text: 'who, what, when, where, why',
    column_id: 1,
  },
  {
    name: 'Body parts',
    text: 'head, eye, nose, ear, mouth',
    column_id: 1,
  },
  {
    name: 'HTML',
    text: 'elements, attributes, headings, lists',
    column_id: 2,
  },
  {
    name: 'CSS',
    text: 'selectors, styling text, background, and boxes',
    column_id: 2,
  },
  {
    name: 'JavaScript',
    text: 'variables, functions, arrays, objects',
    column_id: 2,
  },
  {
    name: 'Beginner',
    text: 'Notes, scales, and chords',
    column_id: 3,
  },
  {
    name: 'Intermediate',
    text: 'keys, dynamics, rhythm',
    column_id: 3,
  },
  {
    name: 'Adavanced',
    text: 'ear training, sight reading, theory',
    column_id: 3,
  },
  {
    name: 'Basic commands',
    text: 'sit, down, stay, speak, shake',
    column_id: 4,
  },
  {
    name: 'Obedience on the walk',
    text: 'focus, response time, reactions to other dogs/humans',
    column_id: 4,
  },
  {
    name: 'Behavior in the house',
    text: 'reaction at the window, stealing food, jumping on guests, chasing the cats',
    column_id: 4,
  },
  {
    name: 'Demolition',
    text: 'dropped ceiling, carpet, wallpaper',
    column_id: 5,
  },
  {
    name: 'Rebuild',
    text: 'patch & paint, install new flooring, update electrical',
    column_id: 5,
  },
  {
    name: 'Design',
    text: 'furniture, lighting, wall decor',
    column_id: 5,
  },
  {
    name: 'Kitchen and bathrooms',
    text: 'general cleaning, polish cabinets, clean oven',
    column_id: 6,
  },
  {
    name: 'Whole house',
    text: 'dust, clean windows, clean carpets',
    column_id: 6,
  },
  {
    name: 'Basement & garage',
    text: 'purge and organize',
    column_id: 6,
  },
];

const seedCards = () => Cards.bulkCreate(cardsdata);

module.exports = seedCards;
