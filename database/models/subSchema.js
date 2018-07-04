const db = require('../indexDb.js');


const Sub = db.sequelize.define('sub', {

  name: db.sequelize.Sequelize.STRING,
  phone: db.sequelize.Sequelize.STRING,
  phone_alt: db.sequelize.Sequelize.STRING,
  email: db.sequelize.Sequelize.STRING,
  photo_url: db.sequelize.Sequelize.STRING,
  address_street: db.sequelize.Sequelize.TEXT,
  address_city: db.sequelize.Sequelize.STRING,
  address_zipcode: db.sequelize.Sequelize.STRING,
  address_state: db.sequelize.Sequelize.STRING,
  work_eligibility: db.sequelize.Sequelize.BOOLEAN,
  permitted: db.sequelize.Sequelize.BOOLEAN,
  permitted_exp_date: db.sequelize.Sequelize.DATEONLY,
  special_ed: db.sequelize.Sequelize.BOOLEAN,
  jobs_completed: db.sequelize.Sequelize.INTEGER,
  jobs_cancelled: db.sequelize.Sequelize.INTEGER,
  jobs_claimed: db.sequelize.Sequelize.INTEGER,

});

Sub.sync();
module.exports.Sub = Sub;
