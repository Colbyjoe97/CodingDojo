const controller = require('../controllers/api_controller')

module.exports = function(app) {
    app.get('/', (req, res) => {
        controller.index(req, res)
    })

    app.get('/new/:name', (req, res) => {
        controller.create(req, res)
    })

    app.get('/delete/:name', (req, res) => {
        controller.delete(req, res)
    })

    app.get('/:name', (req, res) => {
        controller.findOne(req, res)
    })
}