const passport = require("passport");
const {User} = require("../../database/models/userSchema");
const {School} = require("../../database/models/schoolSchema");
const {Sub} = require("../../database/models/subSchema");
const {Admin} = require("../../database/models/adminSchema");
const LocalStrategy = require("passport-local");

passport.serializeUser((user, done)=>{
  done(null, user.id);
})

passport.deserializeUser((id, done)=>{
  User.findById(id).then(user=>{
    done(err, user);
  })
})

passport.use(new LocalStrategy({usernameField: 'username'},(username, password, done)=>{
  User.findOne({username: username.toLowerCase()}, (error, user)=>{
    if(error) {return done(error);}
    if(!user) {return done(null, false, "Invalid Credentials");}
    user.comparePassword(password, (err, isMatch)=>{
      if(err) {return done(err);}
      if(isMatch){
        return done(null, user);
      }
      return done(null, false, "Invalid Credentials");
    })
  })
}))

const signup = ({username, password, req, role})=>{
  if(!username || !password){
    throw new Error("You must provide an username and password.")
  }
  User.findOne({username})
    .then(existingUser=>{
      if(existingUser) {
        throw new Error("Username taken!");
      }
      let userRole = "";
      let roleId = null;
      if(role === "admin"){
        userRole = "fk_admin";
        let newAdmin = Admin.build({
          name: "Admin9000"
        }).save().then((savedAdmin)=>{
          console.log(savedAdmin)
          roleId = savedAdmin.id
        })
      } else if (role === "school"){
        userRole = "fk_school";
        let newSchool = School.build({
          school_name: "School2"
        }).save().then((savedSchool)=>{
          roleId = savedSchool.id
        })
      } else if (role === "sub"){
        userRole = "fk_sub";
        let newSub = Sub.build({
          name: "Mr. Q"
        }).save().then((savedSub)=>{
          roleId = savedSub.id
        })
      }
      User.create({
        username,
        password,
        [userRole]: roleId,
      })
    })
    .then(user=>{
      return new Promise((resolve, reject)=>{
        req.logIn(user, (error)=>{
          if(error) {
            reject(error);
          }
          resolve(user);
        })
      })
    })
}

const login = ({username, password, req, role}) => {

}

module.exports = {signup, login};