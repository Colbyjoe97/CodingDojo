const controller = require('../controllers/cake.controller')

module.exports = function(app) {
    app.get('/cakes', (req, res) => {
        controller.index(req, res)
    })

    app.get('/cake/:id', (req, res) => {
        controller.getOne(req, res)
    }),

    app.post('/new/cake', (req, res) => {
        controller.create(req, res)
    }),

    // Rate
    app.post('/new/rating/:id', (req, res) => {
        controller.rate(req, res)
    }),

    app.delete('/delete/:id', (req, res) => {
        controller.delete(req, res)
    }),

    app.put('/update/:id', (req, res) => {
        controller.update(req, res)
    })
}