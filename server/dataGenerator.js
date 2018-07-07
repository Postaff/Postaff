const { User } = require('../database/models/userSchema');
const { Admin } = require('../database/models/adminSchema');
const { School } = require('../database/models/schoolSchema');
const { Sub } = require('../database/models/subSchema');
const { Job } = require('../database/models/jobSchema');
const AuthService = require('./middlewares/authenticationService');
const faker = require('faker');

exports.initDB = (req, res) => {
  for(let i = 1; i <= 4; i++) {
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
              role: 'admin',
              fk_admin: savedAdmin.id,
            }).save();
          });
      });
  }

  const schools = ['Long Beach Elementary School', 'Lakeside Middle School',
  'Spring Hill School of Fine Arts', 'East Shores Middle School', 'Deer River School for Girls', 
  'Edward R. Murrow High School', 'John R. McKinney High School', 'Highland Charter School',
  'Garyville High School','Hawking Middle School]'];

  const schoolImgUrls = [
      'http://www.diamond-build.com/wp-content/uploads/2013/11/welbourne-1.jpg',
      'https://we-ha.com/wp-content/uploads/2016/02/gcec-2-web.jpg',
      'https://daily.jstor.org/wp-content/uploads/2017/08/generic_middle_school_1050x700.jpg',
      'https://www.thoughtco.com/thmb/IHLRE5y7MW4O7MKp8_iuoqXkjBc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Privateschool-58b5b2173df78cdcd8a980c7.jpg',
      'http://www.dinwiddie.k12.va.us/sut/files/2012/11/SUT-ELEM.png',
      'https://eisenhower.vansd.org/wp-content/uploads/sites/8/2015/05/eisenhower-bldg-2.jpg',
      'https://cdn1.teach.com/content/41ae60bfc2a94ef98eb7f539e7e0c382/high-school.jpg',
      'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201807/tdy_news_gosk_school_segregation_180702_1920x1080.760;428;7;70;5.jpg',
      'http://image.al.com/home/bama-media/width600/img/news_birmingham_impact/photo/gardendale-high-schooljpg-a90b5be907fd546b.jpg',
      'https://www.centralcityschoolsne.org/pages/uploaded_images/elementary.JPG',
    ];
  for(let j = 0; j < schools.length; j++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    School.build({
      school_name: schools[j],
      school_img: schoolImgUrls[j],
      address_street: faker.address.streetAddress(),
      address_city: faker.address.city(),
      address_state: faker.address.stateAbbr(),
      address_zipcode: faker.address.zipCode(),
      contact_name: `${firstName} ${lastName}`,
      contact_title: faker.name.title(),
      contact_email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(0),
      phone_ext: '112',
      notes: faker.lorem.lines(),
    }).save()
      .then((savedSchool) => {
        AuthService.saltAndHashPassword(`school${j}`)
          .then((hashed) => {
            User.build({
              username: `school${j}`,
              password: hashed,
              role: 'school',
              fk_school: savedSchool.id,
            }).save();
          });
      });
  }

  for(let k = 1; k <= 40; k++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    Sub.build({
      name: `${firstName} ${lastName}`,
      phone: faker.phone.phoneNumberFormat(0),
      phone_alt: faker.phone.phoneNumberFormat(0),
      email: faker.internet.email(),
      photo_url: faker.image.avatar(),
     
      address_street: faker.address.streetAddress(true),
      address_city: faker.address.city(),
      address_state: faker.address.stateAbbr(),
      address_zipcode: faker.address.zipCode(),
      work_eligibility: true,
      special_ed: faker.helpers.randomize([true,false]),
    }).save()
      .then((savedSub) => {
        AuthService.saltAndHashPassword(`sub${k}`)
          .then((hashed) => {
            User.build({
              username: `sub${k}`,
              password: hashed,
              role: 'sub',
              fk_sub: savedSub.id,
            }).save();
          });
      });
  }

  const subjects = ['English', 'Literature', 'Math', 'Geography', 
  'History', 'Social Studies', 'Science', 'Art', 'Music', 'Language Arts', 
  'Biology', 'Health', 'PE', 'Chemistry', 'Computer Science', 'Philosophy'];
  const grades = ['Pre-K', '1', '2', '3', '4', '5', '6', '7', 
    '8', '9', '10', '11', '12', 'Special Ed'];

  for(let l = 1; l <= 50; l++) {
    let claimed = false;
    let approved = faker.helpers.randomize([true,false]);
    if(approved){
      claimed = faker.helpers.randomize([true, false]);
    }
    let grade = faker.helpers.randomize(grades);
    let subject = faker.helpers.randomize(subjects);
    let future = faker.date.recent((Math.floor(Math.random() * 21) + 7));

    Job.create({
      description: `${subject} Substitue teacher needed for grade ${grade}`,
      start_time: `${Math.floor(Math.random() * 4) + 8} AM`,
      end_time: `${Math.floor(Math.random() * 8) + 1} PM`,
      start_date: future,
      end_date: future.setDate(future.getDate() + Math.floor(Math.random() * 4) + 1),
      subject,
      grade,
      approved,
      claimed,
      completed: false,
      paid: false,
      fk_school: Math.floor(Math.random() * 10) + 1,
      fk_sub: (claimed ? Math.floor(Math.random() * 40) + 1 : null)
    })
  }
  
  res.status(200).send('data generated successfully')
};
