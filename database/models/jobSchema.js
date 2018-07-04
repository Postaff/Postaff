const db = require('../indexDb.js');
const { School } = require('./schoolSchema');
const { Subs } = require('./subSchema');

// have created a completed_by and claimed-by property in this schema

const Job = db.sequelize.define('job', {
  description: db.sequelize.Sequelize.TEXT,
  schoolName: db.sequelize.Sequelize.STRING,
  start_time: db.sequelize.Sequelize.TIME,
  end_time: db.sequelize.Sequelize.TIME,
  start_date: db.sequelize.Sequelize.DATEONLY,
  end_date: db.sequelize.Sequelize.DATEONLY,
  subject: db.sequelize.Sequelize.STRING,
  grade: db.sequelize.Sequelize.STRING,
  notes: db.sequelize.Sequelize.TEXT,
  attachments: db.sequelize.Sequelize.BLOB,
  rate: db.sequelize.Sequelize.INTEGER,
  approved: db.sequelize.Sequelize.BOOLEAN,
  claimed: db.sequelize.Sequelize.BOOLEAN,
  claimed_by: db.sequelize.Sequelize.STRING,
  complete: db.sequelize.Sequelize.BOOLEAN,
  completed_by: db.sequelize.Sequelize.STRING,
  hours_submitted: db.sequelize.Sequelize.BOOLEAN,
  hours_completed: db.sequelize.Sequelize.INTEGER,
  hours_approved: db.sequelize.Sequelize.BOOLEAN,
  school_rating: db.sequelize.Sequelize.INTEGER,
  sub_rating: db.sequelize.Sequelize.INTEGER,
  paid: db.sequelize.Sequelize.BOOLEAN,
});

// School.hasMany(Job, { foreignKey: 'fk_school' });
// Job.belongsTo(School, { foreignKey: 'fk_school' });

Sub.hasMany(Job, {foreignKey: 'fk_sub'});
Job.belongsTo(Sub, {froeignKey: 'fk_sub'});
const startTime = '12:59:59';
const endTime = '14:20:20';
const startDate = new Date();
const future = new Date();
const endDate = new Date(future.setDate(future.getDate() + 30));


/**
 *  UNCOMMENT THE FOLLOWING TO GENERATE SAMPLE DATA
 */
// Job.create({
//   description: 'looking for history sub',
//   School_id: 1,
//   start_time: startTime,
//   end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'History',
//   grade: 8,
//   approved: true,
// });
// Job.create({
//   description: 'looking for math sub',
//   School_id: 2,
//   start_time: startTime,
//   end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'Math',
//   grade: 6,
//   approved: true,
// });
// Job.create({
//   description: 'looking for science sub',
//   School_id: 1,
//   start_time: startTime,
//   end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'Science',
//   grade: 8,
// })
// Job.create({
//   description: "looking for history sub",
//   School_id: 2,
//   // start_time: startTime,
//   // end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'History',
//   grade: 6,
//   claimed: true,
//   approved: true,
// })
// Job.create({
//   description: "looking for computer sub",
//   School_id: 2,
//   claimed: true,
//   approved: false,
//   // start_time: startTime,
//   // end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'Computer',
//   grade: 6,
// })
//   completed_by: 1,
// });
// Job.create({
//   description: 'looking for English sub',
//   School_id: 4,
//   start_time: startTime,
//   end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'English',
//   grade: 7,
//   approved: false,
//   claimed: true,
//   claimed_by: 1,
// });
// Job.create({
//   description: 'looking for Chemistry sub',
//   School_id: 4,
//   start_time: startTime,
//   end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'Chemistry',
//   grade: 7,
//   approved: false,
//   claimed: true,
//   claimed_by: 1,
// });

Job.sync();

module.exports.Job = Job;
