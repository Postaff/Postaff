const router = require('express').Router();
const AuthService = require('./middlewares/auth');
const usersCtrl = require('./controllers/usersController');

router.route('/api/users/login')
  .post(usersCtrl.loginUser);

router.route('/api/users/userId/logout')
  .get(usersCtrl.logoutUser);

router.route('/api/users/:userId')
  .patch(usersCtrl.updateUser);

router.route('/api/users')
  .post(AuthService.signup)
  .get(usersCtrl.getAllUsers);

router.route('/api/users/:userId')
  .get(usersCtrl.getUserById);

module.exports = router;
