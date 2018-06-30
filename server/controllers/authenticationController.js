const { User } = require('../../database/models/userSchema');
const { Admin } = require('../../database/models/adminSchema');
const AuthService = require('../middlewares/authenticationService');

exports.signup = (req, res, next) => {
  const user = req.body;
  if(!user.username || !user.password) {
    return res.status(422).send({ error: 'You must provide an username or password.'})
  }
  User.findOne({where: { username: user.username }})
    .then((existingUser)=>{
      if(existingUser) {
        res.status(422).send({ error: 'username already exist.'});
      }
      Admin.build({
        name: user.admin.name,
        email: user.admin.email,
      }).save()
        .then((savedAdmin) => {
          AuthService.saltAndHashPassword(user.password)
            .then((hashed) => {
              User.build({
                username: user.username,
                password: hashed,
                fk_admin: savedAdmin.id,
              }).save()
                .then((savedUser) => {
                  res.status(201).send(savedUser);
                })
            })
        })
    })
    .catch((error) => {
      res.status(404).send(error, "error");
    })
}