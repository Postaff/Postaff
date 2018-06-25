const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const expressGraphQL = require("express-graphql");
const router = require("./routes.js");
const schema = require("./middleware/schema");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(__dirname + '/../client/dist'));
app.use('/graphql', expressGraphQL({
  schema,
  graphiql:true
}))

app.use('/', router);

app.listen(PORT, ()=>{
  console.log(`listening por: ${PORT}`);
});
exports.app = app;
