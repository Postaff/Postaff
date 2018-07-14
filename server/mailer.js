require('dotenv').config();
const nodemailer = require('nodemailer');


const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_PASS;

const transport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    type: 'login',
    user: gmailUser,
    pass: gmailPass,
  },
});

const mailOptions = {
  from: 'postaffnotifier@gmail.com',
  to: 'postaffnotifier@gmail.com',
  subject: 'POSTAFF: You Have Jobs To Review',
  html: 'Please visit Postaff and login to see your new opportunities',
};

transport.sendMail(mailOptions, (err, response) => {
  if(err) {
    console.error('contact-failure', err);
  } else {
    console.log('contact-success', response);
  }
});
