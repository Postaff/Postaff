const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const dotenv = require('dotenv').config();
const { User } = require('../../database/models/userSchema');
const { School } = require('../../database/models/schoolSchema');
const { Sub } = require('../../database/models/subSchema');
const { Admin } = require('../../database/models/adminSchema');

const comparePassword = (pwFromClient, pwFromDB, callback) => {
  bcrypt.compare(pwFromClient, pwFromDB, (err, isMatch) => {
    if(err) { return callback(err); }
    callback(null, isMatch);
  })
}

const localLogin = new LocalStrategy((username, password, done) => {
  User.findOne({ where: {username: username} })
    .then((existingUser) => {
      console.log(existingUser)
      if(existingUser) {
        comparePassword(password, existingUser.password, function(err, isMatch) {
          if(err) { return done(err) };
          if(!isMatch) {return done(null, false)};
          return done(null, existingUser);
        })
      } else {
        done(null, false)
      }
    })
    .catch((error) => {
      return done(error, false)
    })
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub)
    .then((existingUser) => {
      if(existingUser) {
        done(null, existingUser);
      } else {
        done(null, false);
      }
    })
    .catch((error) => {
      return done(error, false);
    })
})

passport.use(jwtLogin);
passport.use(localLogin);

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET)
}

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

const logout = (req, res) => {
  console.log("test")
  req.logout();
  res.redirect('/');
};

module.exports = { saltAndHashPassword, tokenForUser };
