const mongoose = require('mongoose')

module.exports = function(app) {
    mongoose.connect('mongodb://localhost/quotesDB', {useNewUrlParser: true});
}