const db = require('../indexDb.js');
const { School } = require('./schoolSchema');
const { Sub } = require('./subSchema');
const faker = require('faker');

const Job = db.sequelize.define('job', {
  description: db.sequelize.Sequelize.TEXT,
  schoolName: db.sequelize.Sequelize.STRING,
  start_time: db.sequelize.Sequelize.STRING,
  end_time: db.sequelize.Sequelize.STRING,
  start_date: db.sequelize.Sequelize.DATEONLY,
  end_date: db.sequelize.Sequelize.DATEONLY,
  subject: db.sequelize.Sequelize.STRING,
  grade: db.sequelize.Sequelize.STRING,
  notes: db.sequelize.Sequelize.TEXT,
  attachments: db.sequelize.Sequelize.BLOB,
  rate: db.sequelize.Sequelize.INTEGER,
  approved: db.sequelize.Sequelize.BOOLEAN,
  claimed: db.sequelize.Sequelize.BOOLEAN,
  completed: db.sequelize.Sequelize.BOOLEAN,
  hours_submitted: db.sequelize.Sequelize.BOOLEAN,
  hours_completed: db.sequelize.Sequelize.INTEGER,
  hours_approved: db.sequelize.Sequelize.BOOLEAN,
  school_rating: db.sequelize.Sequelize.INTEGER,
  sub_rating: db.sequelize.Sequelize.INTEGER,
  paid: db.sequelize.Sequelize.BOOLEAN,
});

Job.belongsTo(School, { foreignKey: 'fk_school' });
Job.belongsTo(Sub, {foreignKey: 'fk_sub'});

Job.sync();

module.exports.Job = Job;
