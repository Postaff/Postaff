const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../database/models/userSchema');
const { School } = require('../../database/models/schoolSchema');
const { Sub } = require('../../database/models/subSchema');
const { Admin } = require('../../database/models/adminSchema');
const jwtSecret = Buffer.from('savedByTheBell', 'base64');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ where: { username } }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}));

const saltAndHashPassword = (pw) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10)
    .then((salt) => {
      bcrypt.hash(pw, salt, null)
      .then((hashed) =>{
        resolve(hashed);
      })
    })
    .catch((error) => {
      reject(error);
    })
  })
}

function isAuthorized(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

const createAdmin = (user) => {
  Admin.build({
    name: user.admin.name,
    email: user.admin.email,
  }).save()
    .then((savedAdmin) => {
      User.create({
        username: user.username,
        password: user.password,
        fk_admin: savedAdmin.id,
      })
        .then(created => created);
    });
};

const createSchool = (user) => {
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
      User.create({
        username: user.username,
        password: user.password,
        fk_school: savedSchool.id,
      })
        .then(created => created);
    });
};

const createSub = (user) => {
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
      User.create({
        username: user.username,
        password: user.password,
        fk_sub: savedSub.id,
      }).then(created => created);
    });
};

const login = (req, res) => {
  console.log(req.body)
  const { username, password } = req.body
  User.findOne({ where: { username } })
    .then((existingUser) => {
      console.log("password", existingUser.password)
      console.log(password);
      if(existingUser.password === password){
        const token = jwt.sign({sub: existingUser.id}, jwtSecret);
          res.status(200).send({
            message: 'You have successfully logged in!',
            token,
          })
      } else {
        res.status(404).send("throw 1");
      }
    })
    .catch((error)=>{
      res.status(404).send("throw 2");
    })
};

const signup = (req, res) => {
  const { username, password, role } = req.body;
  let user = null;
  if (!username || !password) {
    throw new Error('You must provide an username and password.');
  }
  passport.authenticate('local');
  User.findOne({ where: { username } })
    .then((existingUser) => {
      if (existingUser) {
        throw new Error('Username taken!');
      }
      if (role === 'admin') {
        user = createAdmin(req.body);
      } else if (role === 'school') {
        user = createSchool(req.body);
      } else if (role === 'sub') {
        user = createSub(req.body);
      }
    })
    .then((user) => {
      req.login(user, (error) => {
        if (error) {
          res.status(404).send(error);
        }
        res.render('/', { message: req.flash('signupMessage') });
      });
    });
};

const logout = (req, res) => {
  console.log("test")
  req.logout();
  res.redirect('/');
};

module.exports = { signup, logout, login, saltAndHashPassword };
