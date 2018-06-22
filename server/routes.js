const router = require('express').Router();
const staffsCtrl = require('./controllers/staffsController');
const usersCtrl = require('./controllers/usersController');
const schoolsCtrl = require('./controllers/schoolsController');
const jobsCtrl = require('./controllers/jobsController');

router.route('/api/staffs')
  .get()

router.route('/api/staffs/:staffId')
  .get()

router.route('/api/users/login')
  .post()

router.route('/api/users/userId/logout')
  .get()

router.route('/api/users/:userId')
  .put()

router.route('/api/users')
  .post()
  .get()

router.route('/api/users/:userId')
  .get()

router.route('/api/users/:userId/jobs')
  .get()

router.route('/api/jobs')
  .get()
  .post()
  .put()
  .delete()

router.route('api/schools')
  .get()
  .post()

router.route('api/schools/:schoolId')
  .get()
  .put()

router.route('api/schools/:schoolId/jobs')
  .get()

router.route('api/schools/:schollId/staffs/:staffId') //this is why we need graphQL lol
  .get()

module.exports = router;