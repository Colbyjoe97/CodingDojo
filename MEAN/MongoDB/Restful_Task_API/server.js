const express = require("express");
const app = express();
const mongoose = require('mongoose');
var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect('mongodb://localhost/restfulTasks', {useNewUrlParser: true});
require('./server/config/mongoose')

require('./server/models/task.model')(app)
require('./server/config/routes')(app)


app.listen(8000, () => console.log("The server is all fired up on port 8000"));