const express = require("express");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
var session = require("express-session");
var bodyParser = require("body-parser");
app.use(flash())
app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: "messages",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


require('./server/config/mongoose')(app)
require('./server/models/quote.model')(app)
require('./server/config/routes')(app)


app.listen(8000, () => console.log("The server is all fired up on port 8000"));