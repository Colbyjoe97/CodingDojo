const controller = require('../controllers/pet.controller')

module.exports = function(app) {
    app.get('/api/pets', (req, res) => {
        controller.index(req, res)
    })

    app.get('/api/pet/:id', (req, res) => {
        controller.getOne(req, res)
    })

    app.post('/api/new/pet', (req, res) => {
        controller.create(req, res)
    })

    app.put('/api/like/:id', (req, res) => {
        controller.like(req, res)
    })

    app.delete('/api/delete/:id', (req, res) => {
        controller.delete(req, res)
    })

    app.put('/api/update/:id', (req, res) => {
        controller.update(req, res)
    })
}