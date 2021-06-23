const controller = require('../controllers/note.controller')

module.exports = function(app) {
    app.get('/api/notes', (req, res) => {
        controller.index(req, res)
    }),

    app.post('/api/new/note', (req, res) => {
        controller.create(req, res)
    }),

    app.delete('/api/delete/:id', (req, res) => {
        controller.delete(req, res)
    })
}