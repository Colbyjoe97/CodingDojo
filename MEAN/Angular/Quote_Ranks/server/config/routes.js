const controller = require('../controllers/author.controller')

module.exports = function(app) {
    app.get('/api/authors', (req, res) => {
        controller.index(req, res)
    })

    app.get('/api/author/:id', (req, res) => {
        controller.getOne(req, res)
    }),

    app.post('/api/new/author', (req, res) => {
        controller.create(req, res)
    }),

    app.delete('/api/delete/:id', (req, res) => {
        controller.delete(req, res)
    }),

    app.put('/api/update/:id', (req, res) => {
        controller.update(req, res)
    }),

    // add quote
    app.post('/api/new/quote/:id', (req, res) => {
        controller.addQuote(req, res)
    }),
    
    // Vote
    app.get('/api/authors/:authorId/quotes/:quoteId/:num', (req,res) => {
        controller.addVote(req, res)
    }),

    // Delete Quote
    app.delete('/api/quotes/:quote_id', (req, res) => {
        controller.deleteQuote(req, res)
    })

}