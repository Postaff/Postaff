const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
require('dotenv').config();
const { User } = require('../../database/models/userSchema');

const comparePassword = (pwFromClient, pwFromDB, callback) => {
  bcrypt.compare(pwFromClient, pwFromDB, (err, isMatch) => {
    if(err) { return callback(err); }
    callback(null, isMatch);
  });
};

const localLogin = new LocalStrategy((username, password, done) => {
  User.findOne({ where: { username } })
    .then((existingUser) => {
      if(existingUser) {
        comparePassword(password, existingUser.password, (err, isMatch) => {
          if(err) { return done(err); }
          if(!isMatch) { return done(null, false); }
          return done(null, existingUser);
        });
      } else {
        done(null, false);
      }
    })
    .catch(error => done(error, false));
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
    .catch(error => done(error, false));
});

passport.use(jwtLogin);
passport.use(localLogin);

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
};

const saltAndHashPassword = pw => new Promise((resolve, reject) => {
  bcrypt.genSalt(10)
    .then((salt) => {
      bcrypt.hash(pw, salt, null)
        .then((hashed) => {
          resolve(hashed);
        });
    })
    .catch((error) => {
      reject(error);
    });
});

module.exports = { saltAndHashPassword, tokenForUser };
