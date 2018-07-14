const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const routes = require('./routes.js');

/**
 *  Import the resolvers.
 *  Resolver is functions that take in graphQL query then call the corresponding
 *  sequelize function from controllers.
 *
 *  More info about resolvers inside the resolver file,
 *  Here we're just importing it so we can connect it with our apollo server
 */
const resolvers = require('./middlewares/resolvers.js');
/**
 *  Have fs module reads the file schema.graphql
 *  then gql method from apollo-server will help us parse the file to something readable by apollo
 */
const typeDefs = gql(fs.readFileSync(path.join(__dirname, './middlewares/schema.graphql'), 'utf8'));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'savedByTheBell',
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/api/subs/notify', (req, res) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      type: 'login',
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'POSTAFF: New Job Oppurtunities',
    html: 'Please visit Postaff and login to see your new opportunities',
  };
  transport.sendMail(mailOptions, (err, response) => {
    if(err) {
      res.render('contact-failure', err);
    } else {
      res.end('contact-success', response);
    }
  });
  client.messages.create({
    to: process.env.TWILIO_TO_PHONE,
    from: process.env.TWILIO_FROM_PHONE,
    body: 'POSTAFF: You have new job openings! https://postaff.herokuapp.com/',
  }).then(message => console.log(message.sid));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if(err) {
      res.status(500).send(err);
    }
  });
});

/**
 *  Create a new instance of ApolloServer using typeDefs and resolvers
 *  we declared on top.  Then we apply apollo server to our main server
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use('/api', routes);


app.listen(PORT, () => {});

exports.app = app;
