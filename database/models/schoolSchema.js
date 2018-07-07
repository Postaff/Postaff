const db = require('../indexDb.js');

const School = db.sequelize.define('school', {
  school_name: db.sequelize.Sequelize.STRING,
  school_img: db.sequelize.Sequelize.STRING,
  address_street: db.sequelize.Sequelize.STRING,
  address_city: db.sequelize.Sequelize.STRING,
  address_state: db.sequelize.Sequelize.STRING,
  address_zipcode: db.sequelize.Sequelize.STRING,
  contact_name: db.sequelize.Sequelize.STRING,
  contact_title: db.sequelize.Sequelize.STRING,
  contact_email: db.sequelize.Sequelize.STRING,
  phone: db.sequelize.Sequelize.STRING,
  phone_ext: db.sequelize.Sequelize.STRING,
  total_jobs: db.sequelize.Sequelize.INTEGER,
  completed_jobs: db.sequelize.Sequelize.INTEGER,
  unclaimed_jobs: db.sequelize.Sequelize.INTEGER,
  rating: db.sequelize.Sequelize.INTEGER,
  notes: db.sequelize.Sequelize.TEXT,
});

School.sync();

module.exports.School = School;
