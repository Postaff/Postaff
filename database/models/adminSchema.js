const db = require("../indexDb.js");


const Admin = db.sequelize.define('admin', {

  name: db.sequelize.Sequelize.STRING,
  email: db.sequelize.Sequelize.STRING,
  last_login: db.sequelize.Sequelize.DATE

});

// Admin.create({
//   name: "Admin",
//   email: "admin@postaff.com"
// })

Admin.sync();

exports.Admin = Admin;
