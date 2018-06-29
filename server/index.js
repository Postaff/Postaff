const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const passportConfig = require('./middlewares/auth');
const dotenv = require('dotenv').config();

const app = express();
const PORT = 3000;

/**
 *  Have fs module reads the file schema.graphql
 *  then gql method from apollo-server will help us parse the file to something readable by apollo
 */
const typeDefs = gql(fs.readFileSync(path.join(__dirname, './middlewares/schema.graphql'), 'utf8'));

/**
 *  Import the resolvers.
 *  Resolver is functions that take in graphQL query then call the corresponding
 *  sequelize function from controllers.
 *
 *  More info about resolvers inside the resolver file,
 *  Here we're just importing it so we can connect it with our apollo server
 */
const resolvers = require('./middlewares/resolvers.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'savedByTheBell',
}));
app.use(passport.initialize());
app.use(passport.session());

// THIS IS FOR REACT ROUTER DONOT DELETE
app.get('/*', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

/**
 *  Create a new instance of ApolloServer using typeDefs and resolvers
 *  we declared on top.  Then we apply apollo server to our main server
 */
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server ready at port: ${PORT}`);
});

exports.app = app;
