const db = require("./db.js");

const Sub = sequelize.define('sub', {

  name: Sequelize.STRING,
  username: Sequelize.STRING,
  plain_text_password: Sequelize.STRING,
  phone: Sequelize.INTEGER,
  phone_alt: Sequelize.INTEGER,
  email: Sequelize.STRING,
  photo_url: Sequelize.STRING,
  address_street: Sequelize.TEXT,
  address_city: Sequelize.STRING,
  address_zipcode: Sequelize.STRING,
  address_state: Sequelize.STRING,
  fingerprint: Sequelize.DATE,
  work_eligibility: Sequelize.BOOLEAN,
  jobs_completed: Sequelize.INTEGER,
  jobs_cancelled: Sequelize.INTEGER,
  jobs_claimed: Sequelize.INTEGER,
  credentialed: Sequelize.BOOLEAN,
  special_ed: Sequelize.BOOLEAN,
  permitted: Sequelize.BOOLEAN,
  hire_date: Sequelize.DATE

});