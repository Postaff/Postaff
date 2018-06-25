const express = require("express");
const bodyParser = require("body-parser");
const {ApolloServer, gql} = require("apollo-server");
const morgan = require("morgan");
const helmet = require("helmet");
const router = require("./routes.js");
<<<<<<< HEAD
const fs = require("fs");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const path = require('path');
=======
<<<<<<< HEAD
const schema = require("./middleware/schema");
=======
const path = require("path");
>>>>>>> adds routing to homeLanding and LoginLanding view
>>>>>>> adds routing to homeLanding and LoginLanding view

const app = express();
const PORT = 3000;
const jwtSecret = Buffer.from("Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64");

/**
 *  Have fs module reads the file schema.graphql
 */
const typeDefs = gql(fs.readFileSync(path.join(__dirname, './middlewares/schema.graphql'), 'utf8'))

const resolvers = require("./middlewares/resolvers.js")

/**
 *  Import the resolvers.  
 *  Resolver is functions that take in graphQL query then call the corresponding
 *  sequelize function from controllers.
 *  
 *  More info about resolvers inside the resolver file,
 *  Here we're just importing it so we can connect it with our apollo server  
 */


// Put together a schema



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(helmet());
<<<<<<< HEAD
app.use(express.static(__dirname + "/../client/dist"));
// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
// app.use('/graphiql', graphiqlExpress({endpointURL: "/graphql"}));
const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({app});

app.listen(PORT, ()=>{
  console.log(`Server ready at port: ${PORT}`);
});
=======
app.use(express.static(__dirname + '/../client/dist'));
app.use('/graphql', expressGraphQL({
  schema,
  graphiql:true
}))

//app.use('/', router);

//THIS IS FOR REACT ROUTER DONOT DELETE
app.get('/*', function (req, res) {
  console.log("Refresh Refresh");
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, ()=>{
  console.log(`listening port: ${PORT}`)
})

>>>>>>> adds routing to homeLanding and LoginLanding view
exports.app = app;
