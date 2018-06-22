const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(express.static(__dirname + '/../react-client/dist'))
app.use('/', (req, res)=>{
  res.status(200).send("hello from the server");
});

app.listen(PORT, ()=>{
  console.log(`listening por: ${PORT}`)
})