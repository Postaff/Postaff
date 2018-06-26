const {Job} = require("../../database/models/jobSchema");

module.exports = {

  getAllJobs: () => {
    Job.findAll().then(jobs=>{
      return jobs;
    })
  },

  createJob: function(req, res){

  },

  updateJob: function(req, res){

  },

  deleteJob: function(req, res){

  },

}