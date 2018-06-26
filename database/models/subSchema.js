const db = require("../indexDb.js");

const Sub = db.sequelize.define('sub', {

  name: db.sequelize.Sequelize.STRING,
  plain_text_password: db.sequelize.Sequelize.STRING,
  username: db.sequelize.Sequelize.STRING,
  phone: db.sequelize.Sequelize.INTEGER,
  phone_alt: db.sequelize.Sequelize.INTEGER,
  email: db.sequelize.Sequelize.STRING,
  photo_url: db.sequelize.Sequelize.STRING,
  address_street: db.sequelize.Sequelize.TEXT,
  address_city: db.sequelize.Sequelize.STRING,
  address_zipcode: db.sequelize.Sequelize.STRING,
  address_state: db.sequelize.Sequelize.STRING,
  work_eligibility: db.sequelize.Sequelize.BOOLEAN,
  fingerprint: db.sequelize.Sequelize.DATEONLY,  
  permitted: db.sequelize.Sequelize.BOOLEAN,
  credentialed: db.sequelize.Sequelize.BOOLEAN,
  special_ed: db.sequelize.Sequelize.BOOLEAN,
  jobs_completed: db.sequelize.Sequelize.INTEGER,
  jobs_cancelled: db.sequelize.Sequelize.INTEGER,
  jobs_claimed: db.sequelize.Sequelize.INTEGER,
  hire_date: db.sequelize.Sequelize.DATEONLY

});