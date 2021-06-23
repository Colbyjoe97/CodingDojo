const mongoose = require('mongoose')
const Quote = mongoose.model('Quote')


module.exports = {
    index: function(req, res) {
        console.log(req.session)
        var errors = []
        for(var error of req.flash('quoteErrors')) {
            console.log(error)
            errors.push(error)
        }
        res.render('index', {errors: errors})
    },

    getAll: function(req, res) {
        Quote.find()
            .sort({createdAt: 'descending'})
            .then(data => res.render('quotes', {quotes: data}))
            .catch(err => res.json(err));
    },

    create: function(req, res) {
        const quote = new Quote()
        quote.name = req.body.name;
        quote.quote = req.body.quote;
        quote.save()
            .then(response => {
                console.log('Quote Created', response),
                res.redirect('/')
            })
            .catch(err => {
                // console.log("There's an error!", err)
                for(var key in err.errors) {
                    req.flash('quoteErrors', err.errors[key].message)
                    // console.log(err.errors[key].message)
                }
                // console.log(req.session)
                res.redirect('/')
            })
    }
}