const { Job } = require('../../database/models/jobSchema');
const { School } = require('../../database/models/schoolSchema');
const { Sub } = require('../../database/models/subSchema');
const { User } = require('../../database/models/userSchema');

/**
 * jobs is the query we defined in schema file,
 * we also told graphQL that we would be expecting an array of Job type back.
 * However, we never told graphQL 'how' would we get an array of Job as we expected.
 *
 * We're telling graphQL exactly how we'll achieve that.
 * Since we're using sequelize, we'll simply import our jobSchema.
 * Then we'll call findAll() method from sequelize then return it to the user.
 */
const Query = {
  jobs: () => Job.findAll({
    order: [
      ['start_date', 'ASC'],
    ],
    include: [{
      model: School,
    }],
  }),

  job: (root, { id }) => Job.findById(id)
    .then(foundJob => Job.findOne({
      where: { id: foundJob.id },
      include: [{
        model: School, where: { id: foundJob.fk_school },
      }],
    })),

  schedule: () => Job.findAll({
    where: { claimed: true },
    include: [{
      model: Sub,
    }],
  }),

  jobsBySchool: (root, { id }) => Job.findAll({ where: { fk_school: id } }),

  jobsCompletedByUser: (root, { id }) => Job.findAll({
    where: { fk_sub: id, completed: true }
  }),

  schools: () => School.findAll(),

  subs: () => Sub.findAll(),
  // this is for sublanding page
  subById: (root, args) => Sub.findById(args.id),

  // addClaimByJob: (root, args) => Job.update({where: {fk_sub: args.id}}),
  schoolById: (root, args) => School.findById(args.id),

  // returns school name with username for school job request form
  schoolByUsername: (root, args) => User.findOne({ where: { username: args.username } })
    .then(user => School.findById(user.fk_school)),
};

const Mutation = {
  createJob: (root, args) => {
    const {
      schoolId,
      school,
      subject,
      grade,
      jobDescription,
      startDate,
      endDate,
      startTime,
      endTime,
      additionalInformation,
    } = args.input;
    Job.create({
      description: jobDescription,
      schoolName: school,
      start_time: startTime,
      end_time: endTime,
      start_date: startDate,
      end_date: endDate,
      claimed: false,
      approved: false,
      completed: false,
      subject,
      grade,
      note: additionalInformation,
      fk_school: schoolId,
    }).then(job => job);
  },

  editJob: (root, args) => {
    const {
      schoolId,
      subject,
      grade,
      jobDescription,
      startDate,
      endDate,
      startTime,
      endTime,
      additionalInformation,
    } = args.input;

    Job.update(
      {
        description: jobDescription,
        start_time: startTime,
        end_time: endTime,
        start_date: startDate,
        end_date: endDate,
        subject,
        grade,
        note: additionalInformation,
      },
      {
        where: {
          id: schoolId,
        },
      },
    );
  },

  // This is for changing approved field to 'true' when admin approves job
  approveJob: (root, args) => {
    Job.update({ approved: args.input.approved }, { where: { id: args.input.id } });
  },
  claimJob: (root, args) => { 
    Job.update({ 
      claimed: args.input.claimed, fk_sub: args.input.fk_sub,
    }, { where: { id: args.input.id } });
  },
};

// this is for sublanding page
const Subs = {
  jobAvailable: () => Job.findAll({ where: { approved: true, claimed: false }, order: [['updatedAt', 'DESC']] }),
  jobsCompleted: (sub, args) => Job.findAll({ where: { fk_sub: args.id, completed: true } }),
  claimedJobs: (sub, args) => Job.findAll({ where: { fk_sub: args.id, claimed: true } }),
};

module.exports = { Query, Mutation, Subs };
