const db = require("../indexDb.js");


const Admin = db.sequelize.define('admin', {

  name: db.sequelize.Sequelize.STRING,
  plain_text_password: db.sequelize.Sequelize.STRING,
  username: db.sequelize.Sequelize.STRING,
  email: db.sequelize.Sequelize.STRING,
  last_login: db.sequelize.Sequelize.DATE

});

Admin.sync();

exports.Admin = Admin;
