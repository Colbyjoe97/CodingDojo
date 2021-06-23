const mongoose = require('mongoose')
const dash = require('../controllers/mongoose')

module.exports = function(app) {
    app.get('/', (req, res) => {
        dash.index(req, res)
    })

    app.get('/mongooses/new', (req, res) => {
        res.render("create")
    })

    app.get('/delete/:id', (req, res) => {
        dash.delete(req, res)
    })

    app.get('/view/:id', (req, res) => {
        dash.viewOne(req, res)
    })

    app.get('/editPage/:id', (req, res) => {
        dash.editPage(req, res)
    })

    app.post('/edit/:id', (req, res) => {
        dash.edit(req, res)
    })

    app.post('/addMongoose', (req, res) => {
        dash.create(req, res)
    })
}