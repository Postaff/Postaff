
const jobCtrl = require('../controllers/jobsController');
const {Job} = require("../../database/models/jobSchema");

const Query = {
  jobs: () => Job.findAll()
}

module.exports = { Query };