const express = require("express");
const app = express();
const mongoose = require('mongoose');
var session = require("express-session");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: 'codingdojo',
    resave: false
}))

mongoose.connect('mongodb://localhost/mongooseDB', {useNewUrlParser: true});

require('./server/models/model')(app)
require('./server/config/routes')(app)



app.listen(8000, () => console.log("The server is all fired up on port 8000"));