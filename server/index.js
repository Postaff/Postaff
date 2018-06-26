const express = require("express");
const bodyParser = require("body-parser");
const {ApolloServer, gql} = require("apollo-server");
const morgan = require("morgan");
const helmet = require("helmet");
const router = require("./routes.js");
const fs = require("fs");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const path = require('path');

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
app.use(express.static(__dirname + "/../client/dist"));
// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
// app.use('/graphiql', graphiqlExpress({endpointURL: "/graphql"}));
const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({app});

app.listen(PORT, ()=>{
  console.log(`Server ready at port: ${PORT}`);
});
exports.app = app;
