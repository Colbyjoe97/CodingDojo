const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Established a connection to the DB"))
.catch(err => console.log("Something went wrong when connecting to the DB", err));