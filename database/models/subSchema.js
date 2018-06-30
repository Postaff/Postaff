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
  fingerprint: db.sequelize.Sequelize.DATEONLY,
  permitted: db.sequelize.Sequelize.BOOLEAN,
  credentialed: db.sequelize.Sequelize.BOOLEAN,
  special_ed: db.sequelize.Sequelize.BOOLEAN,
  jobs_completed: db.sequelize.Sequelize.INTEGER,
  jobs_cancelled: db.sequelize.Sequelize.INTEGER,
  jobs_claimed: db.sequelize.Sequelize.INTEGER,

});

// Sub.create({
//   name: "Kenny Le",
//   phone: "2546541254",
//   email: "kenny123@hotmail.com"
// })
// Sub.create({
//   name: "Ainslie Hsu",
//   phone: "6543216541",
//   email: "ainslie123@hotmail.com"
// })
// Sub.create({
//   name: "Mayank Patel",
//   phone: "2547771254",
//   email: "mayank321@hotmail.com"
// })

Sub.sync();
module.exports.Sub = Sub;
