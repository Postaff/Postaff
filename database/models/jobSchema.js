const db = require("../indexDb.js");

const Job = db.sequelize.define('job', {
  description: db.sequelize.Sequelize.TEXT,
  School_id: db.sequelize.Sequelize.INTEGER,
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
  complete: db.sequelize.Sequelize.BOOLEAN,
  hours_submitted: db.sequelize.Sequelize.BOOLEAN,
  hours_completed: db.sequelize.Sequelize.INTEGER,
  hours_approved: db.sequelize.Sequelize.BOOLEAN,
  school_rating: db.sequelize.Sequelize.INTEGER,
  sub_rating: db.sequelize.Sequelize.INTEGER,
  paid: db.sequelize.Sequelize.BOOLEAN
});

// const startTime = '12:59:59';
// const endTime = '14:20:20';
const startDate = new Date();
let future = new Date();
const endDate = new Date(future.setDate(future.getDate() + 30));


// /**
//  *  UNCOMMENT THE FOLLOWING TO GENERATE SAMPLE DATA
//  */
// Job.create({
//   description: "looking for history sub",
//   School_id: 1,
//   // start_time: startTime,
//   // end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'History',
//   grade: 8,
// })
// Job.create({
//   description: "looking for math sub",
//   School_id: 2,
//   // start_time: startTime,
//   // end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'Math',
//   grade: 8,
// })
// Job.create({
//   description: "looking for science sub",
//   School_id: 1,
//   // start_time: startTime,
//   // end_time: endTime,
//   start_date: startDate,
//   end_date: endDate,
//   subject: 'Science',
//   grade: 8,
// })

Job.sync();

module.exports.Job = Job;