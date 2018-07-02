const router = require('express').Router();
const AuthService = require('./middlewares/authenticationService');
const AuthCtrl = require('./controllers/authenticationController');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

router.route('/users/login')
  .post(requireLogin, AuthCtrl.login);

router.route('/users/signup')
  .post(AuthCtrl.signup);

module.exports = router;
