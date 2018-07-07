const db = require('../indexDb.js');

const Admin = db.sequelize.define('admin', {
  name: db.sequelize.Sequelize.STRING,
  email: db.sequelize.Sequelize.STRING,
});

Admin.sync();

exports.Admin = Admin;
