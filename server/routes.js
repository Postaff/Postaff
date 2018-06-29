const router = require('express').Router();
const subsCtrl = require('./controllers/subsController');
const usersCtrl = require('./controllers/usersController');
const schoolsCtrl = require('./controllers/schoolsController');
const jobsCtrl = require('./controllers/jobsController');

router.route('/api/subs')
  .get(subsCtrl.getAllSubs);

router.route('/api/subs/:subId')
  .get(subsCtrl.getSubById);

router.route('/api/users/login')
  .post(usersCtrl.loginUser);

router.route('/api/users/userId/logout')
  .get(usersCtrl.logoutUser);

router.route('/api/users/:userId')
  .patch(usersCtrl.updateUser);

router.route('/api/users')
  .post(usersCtrl.createUser)
  .get(usersCtrl.getAllUsers);

router.route('/api/users/:userId')
  .get(usersCtrl.getUserById);

router.route('/api/users/:userId/jobs')
  .get(usersCtrl.getAllJobsByUserId);

router.route('/api/jobs')
  .get(jobsCtrl.getAllJobs)
  .post(jobsCtrl.createJob)
  .patch(jobsCtrl.updateJob)
  .delete(jobsCtrl.deleteJob);

router.route('api/schools')
  .get(schoolsCtrl.getAllSchools)
  .post(schoolsCtrl.createSchool);

router.route('api/schools/:schoolId')
  .get(schoolsCtrl.getSchoolById)
  .patch(schoolsCtrl.updateSchool);

router.route('api/schools/:schoolId/jobs')
  .get(schoolsCtrl.getAllJobsBySchoolId);

router.route('api/schools/:schoolId/subs/:subId') // this is why we need graphQL lol
  .get(schoolsCtrl.getSubBySchoolId);

module.exports = router;
