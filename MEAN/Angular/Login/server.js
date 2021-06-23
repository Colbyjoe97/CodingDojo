const express = require("express");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
var bodyParser = require("body-parser");
var session = require("express-session");
app.use(bodyParser.urlencoded({entended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());
app.use(flash())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

mongoose.connect('mongodb://localhost/restfulTasks', {useNewUrlParser: true});
require('./server/config/mongoose')

require('./server/models/user.model')(app)
require('./server/config/routes')(app)


app.listen(8000, () => console.log("The server is all fired up on port 8000"));