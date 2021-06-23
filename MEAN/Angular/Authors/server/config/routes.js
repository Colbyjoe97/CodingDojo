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


    // Rate
    // app.post('/new/rating/:id', (req, res) => {
    //     controller.rate(req, res)
    // }),

    app.delete('/api/delete/:id', (req, res) => {
        controller.delete(req, res)
    }),

    app.put('/api/update/:id', (req, res) => {
        controller.update(req, res)
    })
}