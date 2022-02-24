const { User } = require('../models');

const userdata = [
  {
    username: 'Printemps',
    email: 'printemps@gmail.com',
    password: 'printemps',
  },
  {
    username: 'Sommer',
    email: 'sommers@gmail.com',
    password: 'sommer',
  },
  {
    username: 'Herfst',
    email: 'herfst@gmail.com',
    password: 'herfst',
  },
  {
    username: 'Invierno',
    email: 'invierno@gmail.com',
    password: 'invierno',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
