
const {Job} = require("../../database/models/jobSchema");
const {School} = require("../../database/models/schoolSchema");
const {Sub} = require("../../database/models/subSchema");

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
  jobs: () => Job.findAll(),
  schools: () => School.findAll(),
  subs: () => Sub.findAll(),
}

module.exports = { Query };