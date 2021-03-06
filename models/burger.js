// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.all('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(vals, cb) {
    orm.create('burgers', vals, (res) => cb(res));
  },
  update(id, cb) {
    orm.update('burgers', 'devoured', id, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('burgers', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
