const db = require('../indexDb.js');

const School = db.sequelize.define('school', {
  school_name: db.sequelize.Sequelize.STRING,
  username: db.sequelize.Sequelize.STRING,
  plain_text_password: db.sequelize.Sequelize.STRING,
  address_street: db.sequelize.Sequelize.TEXT,
  address_city: db.sequelize.Sequelize.STRING,
  adress_state: db.sequelize.Sequelize.STRING,
  address_zipcode: db.sequelize.Sequelize.INTEGER,
  contact_name: db.sequelize.Sequelize.STRING,
  contact_title: db.sequelize.Sequelize.STRING,
  contact_phone: db.sequelize.Sequelize.INTEGER,
  contact_email: db.sequelize.Sequelize.STRING,
  main_phone: db.sequelize.Sequelize.STRING,
  main_phone_ext: db.sequelize.Sequelize.STRING,
  total_jobs: db.sequelize.Sequelize.INTEGER,
  completed_jobs: db.sequelize.Sequelize.INTEGER,
  unclaimed_jobs: db.sequelize.Sequelize.INTEGER,
  rating: db.sequelize.Sequelize.INTEGER,
  notes: db.sequelize.Sequelize.TEXT,
  date_registered: db.sequelize.Sequelize.DATEONLY,
});

// School.create({
//   school_name: "John R. McKinney",
//   contact_name: "Lebron James",
//   main_phone: "5555555555"
// })
// School.create({
//   school_name: "Edward R. Murrow",
//   contact_name: "Jimmy Kimmel",
//   main_phone: "8888888888"
// })

// School.create({
//   school_name: "Hack Reactor",
//   contact_name: "John Doe",
//   main_phone: "1234567890"
// })


School.sync();

module.exports.School = School;
