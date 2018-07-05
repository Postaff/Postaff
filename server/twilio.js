const dotenv = require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: '+18189282867',
  from: '+16468460256',
  body: 'This is a test msg from twilio'
}).then((message) => console.log(message.sid));