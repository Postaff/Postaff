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

School.hasMany(Job, { foreignKey: 'fk_school'});
Job.belongsTo(School, { foreignKey: 'fk_school'});

Sub.hasMany(Job, {foreignKey: 'fk_sub'});
Job.belongsTo(Sub, {froeignKey: 'fk_sub'});
// const now = new Date();
// const startDate = new Date(future.setDate(future.getDate() + 2));
// const future = new Date();
// const endDate = new Date(future.setDate(future.getDate() + 30));
// const date2 = new Date(future.setDate(future.getDate() + 25));
// const date3 = new Date(future.setDate(future.getDate() + 20));
// const date4 = new Date(future.setDate(future.getDate() + 10));
// const date5 = new Date(future.setDate(future.getDate() + 5));

/**
 *  UNCOMMENT THE FOLLOWING TO GENERATE SAMPLE DATA
 */
// Job.create({
//   description: "looking for history sub",
//   fk_school: 1,
//   fk_sub: 3,
//   start_date: startDate,
//   end_date: date2,
//   subject: 'History',
//   grade: 8,
//   claimed: true,
//   approved: true,
//   complete: false,
// })
// Job.create({
//   description: "looking for math sub",
//   fk_school: 2,
//   start_date: date5,
//   end_date: date3,
//   subject: 'Math',
//   grade: 7,
//   claimed: false,
//   approved: false,
//   completed: false,
// })
// Job.create({
//   description: "looking for science sub",
//   fk_school: 1,
//   start_date: date3,
//   end_date: endDate,
//   subject: 'Science',
//   grade: 9,
//   claimed: false,
//   approved: false,
//   completed: false,
// })
// Job.create({
//   description: "looking for pe sub",
//   fk_school: 2,
//   fk_sub: 1,
//   start_date: startDate,
//   end_date: date5,
//   subject: 'PE',
//   grade: 6,
//   claimed: true,
//   approved: true,
//   completed: true,
// })
// Job.create({
//   description: "looking for computer sub",
//   fk_school: 3,
//   fk_sub: 1,
//   claimed: true,
//   approved: false,
//   complete: false,
//   start_date: date4,
//   end_date: date3,
//   subject: 'Computer',
//   grade: 5,
// })
// Job.create({
//   description: "coding class sub needed",
//   fk_school: 3,
//   fk_sub: 2,
//   claimed: true,
//   approved: false,
//   complete: false,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'Coding',
//   grade: 5,
// })


/**
 *  this following are based on old schema,
 *  whoever made this, please update it following the above format
 */
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
