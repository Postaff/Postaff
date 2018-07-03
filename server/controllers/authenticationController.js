const { User } = require('../../database/models/userSchema');
const { Admin } = require('../../database/models/adminSchema');
const { School } = require('../../database/models/schoolSchema');
const { Sub } = require('../../database/models/subSchema');
const AuthService = require('../middlewares/authenticationService');

exports.login = (req, res) => {
  res.send({ 
    token: AuthService.tokenForUser(req.user),
    role: req.user.role,
    username: req.user.username,
    schoolId: req.user.fk_school,
    subId: req.user.fk_sub,
    adminId: req.user.fk_admin,
  })
}

exports.signup = (req, res) => {
  console.log(req.body)
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
                role: 'admin',
                fk_admin: savedAdmin.id,
              }).save()
                .then((savedUser) => {
                  res.status(201).send({ 
                    token: AuthService.tokenForUser(savedUser),
                    role: savedUser.role,
                    username: savedUser.username,
                    schoolId: savedUser.fk_school,
                    subId: savedUser.fk_sub,
                    adminId: savedUser.fk_admin,
                  });
                })
            })
        })
    })
    .catch((error) => {
      res.status(404).send(error, "error");
    })
}

exports.createSchool = (req, res) => {
  console.log(req.body)
  const user = req.body;
  if(!user.username || !user.password) {
    return res.status(422).send({ error: 'You must provide an username or password.'})
  }
  User.findOne({where: { username: user.username }})
    .then((existingUser)=>{
      if(existingUser) {
        res.status(422).send({ error: 'username already exist.'});
      }
      School.build({
        school_name: user.school.schoolName,
        address_street: user.school.street,
        address_city: user.school.city,
        address_state: user.school.state,
        address_zipcode: user.school.zipcode,
        contact_name: user.school.contactName,
        contact_title: user.school.contactTitle,
        contact_email: user.school.email,
        phone: user.school.phone,
        phone_ext: user.school.phoneExt,
        notes: user.school.additionalInfo,
      }).save()
        .then((savedSchool) => {
          AuthService.saltAndHashPassword(user.password)
            .then((hashed) => {
              User.build({
                username: user.username,
                password: hashed,
                role: 'school',
                fk_admin: savedSchool.id,
              }).save()
                .then((savedUser) => {
                  res.status(201).send({ 
                    token: AuthService.tokenForUser(savedUser),
                    role: savedUser.role,
                    username: savedUser.username,
                    schoolId: savedUser.fk_school,
                    subId: savedUser.fk_sub,
                    adminId: savedUser.fk_admin,
                  });
                })
            })
        })
    })
    .catch((error) => {
      res.status(404).send(error, "error");
    })
}

exports.createSub = (req, res) => {
  console.log(req.body)
  const user = req.body;
  if(!user.username || !user.password) {
    return res.status(422).send({ error: 'You must provide an username or password.'})
  }
  User.findOne({where: { username: user.username }})
    .then((existingUser)=>{
      if(existingUser) {
        res.status(422).send({ error: 'username already exist.'});
      }
      Sub.build({
        name: user.sub.name,
        phone: user.sub.phone,
        phone_alt: user.sub.phoneAlt,
        email: user.sub.email,
        photo_url: user.sub.photo,
        address_street: user.sub.street,
        address_city: user.sub.city,
        address_state: user.sub.state,
        address_zipcode: user.sub.zipcode,
        work_eligibility: user.sub.workEligibility,
        special_ed: user.sub.specialEd,
      }).save()
        .then((savedSub) => {
          AuthService.saltAndHashPassword(user.password)
            .then((hashed) => {
              User.build({
                username: user.username,
                password: hashed,
                role: 'sub',
                fk_admin: savedSub.id,
              }).save()
                .then((savedUser) => {
                  res.status(201).send({ 
                    token: AuthService.tokenForUser(savedUser),
                    role: savedUser.role,
                    username: savedUser.username,
                    schoolId: savedUser.fk_school,
                    subId: savedUser.fk_sub,
                    adminId: savedUser.fk_admin,
                  });
                })
            })
        })
    })
    .catch((error) => {
      res.status(404).send(error, "error");
    })
}