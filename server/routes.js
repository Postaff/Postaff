const router = require('express').Router();
const AuthService = require('./middlewares/authenticationService');
const AuthCtrl = require('./controllers/authenticationController');

router.route('/api/users/login')
  .post(AuthService.login);

router.route('/api/users/logout')
  .get(AuthService.logout);

router.route('/api/users/signup')
  .post(AuthCtrl.signup);

module.exports = router;
