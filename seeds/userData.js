const { User } = require('../models');

const userdata =
[
  {
    "username": "Trent 1",
    "password": "password1"
  },
  {
    "username": "Trent 2",
    "password": "password2"
  },
  {
    "username": "Trent 3",
    "password": "password3"
  },
  {
    "username": "Trent 4",
    "password": "password4"
  }

];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
