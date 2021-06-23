const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());

mongoose.connect('mongodb://localhost/restfulTasks', {useNewUrlParser: true});
require('./server/config/mongoose')

require('./server/models/note.model')(app)
require('./server/config/routes')(app)

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => console.log("The server is all fired up on port 8000"));