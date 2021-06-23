const mongoose = require('mongoose')
Quote = mongoose.model('Quote')
const quotes = require('../controllers/quotes')

module.exports = function(app) {
    app.get('/', function(req, res) {
        quotes.index(req,res)
    })

    app.post('/addQuote', (req, res) => {
        quotes.create(req, res)
    })

    app.get('/quotes', function(req, res) {
        quotes.getAll(req, res)
    })
}