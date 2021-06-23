const controller = require('../controllers/task.controller')

module.exports = function(app) {
    app.get('/', (req, res) => {
        controller.index(req, res)
    }),

    app.get('/task/:id', (req, res) => {
        controller.getOne(req, res)
    }),

    app.post('/new/task', (req, res) => {
        controller.create(req, res)
    }),

    app.delete('/delete/:id', (req, res) => {
        controller.delete(req, res)
    }),

    app.put('/update/:id', (req, res) => {
        controller.update(req, res)
    })
}