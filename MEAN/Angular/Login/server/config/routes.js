const controller = require('../controllers/user.controller')

module.exports = function(app) {
    app.get('/api/users', (req, res) => {
        controller.index(req, res)
    })

    app.get('/api/user/:name', (req, res) => {
        controller.getOne(req, res)
    }),

    app.post('/api/new/user', (req, res) => {
        controller.create(req, res)
    })
}