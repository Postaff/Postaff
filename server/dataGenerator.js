const { User } = require('../database/models/userSchema');
const { Admin } = require('../database/models/adminSchema');
const { School } = require('../database/models/schoolSchema');
const { Sub } = require('../database/models/subSchema');
const AuthService = require('./middlewares/authenticationService');

exports.initAccounts = () => {

  for(let i = 1; i <= 4; i++){
    Admin.build({
      name: `admin${i}`,
      email: `admin${i}@postaff.com`,
    }).save()
      .then((savedAdmin) => {
        AuthService.saltAndHashPassword(`admin${i}`)
          .then((hashed) => {
            User.build({
              username: `admin${i}`,
              password: hashed,
              role: `admin`,
              fk_admin: savedAdmin.id,
            }).save()
          })
      })
  }

  const schools = ['Long Beach Secondary School','Lakeside Middle School',
  'Seal Gulch Conservatory','Greenville Charter School','Spring Hill School of Fine Arts',
  'East Shores Middle School','Seacoast Secondary School','Bear Mountain Charter School',
  'Deer Valley College','Redlands Conservatory'];

  for(let j = 0; j <= schools.length; j++){
    School.build({
      school_name: schools[j],
      address_street: '8080',
      address_city: 'New York City',
      address_state: 'NY',
      address_zipcode: '10012',
      contact_name: 'John Doe',
      contact_title: 'Mr',
      contact_email: 'john.doe@school.com',
      phone: '200-500-8000',
      phone_ext: '123',
      notes: 'this is a note.',
    }).save()
      .then((savedSchool) => {
        AuthService.saltAndHashPassword(`school${j}`)
          .then((hashed) => {
            User.build({
              username: `school${j}`,
              password: hashed,
              role: `school`,
              fk_school: savedSchool.id,
            }).save()
          })
    })
  }

  const subs = ['Chad	Gonzales','Vanessa	Buchanan','Timmy	Figueroa',
    'Kerry	Hale','Lindsay	Ellis','Rosemarie	Cain','Belinda	Stone',
    'Ida	Sullivan','Clyde	Morgan','Cristina	Fisher']

  for(let k = 0; k <= subs.length; k++){
    Sub.build({
      name: subs[k],
      phone: '200-500-8000',
      phone_alt: '500-500-5000',
      email: `sub${k}@postaff.com`,
      address_street: '8080',
      address_city: 'New York City',
      address_state: 'NY',
      address_zipcode: '10012',
      work_eligibility: true,
      special_ed: true,
    }).save()
      .then((savedSub) => {
        AuthService.saltAndHashPassword(`sub${k}`)
        .then((hashed) => {
          User.build({
            username: `sub${k}`,
            password: hashed,
            role: 'sub',
            fk_sub: savedSub.id,
          }).save()
    })
  })
}
}