const mongoose = require('mongoose')
const Person = mongoose.model('Person')


module.exports = {
    index: function(req, res) {
        Person.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: function(req, res) {
    const person = new Person()
        person.name = req.params.name
        person.save()
            .then(response => console.log("Person creates: ", response))
            .catch(err => console.log("Errors on create: ", err))
        res.redirect('/')
    },

    delete: function(req, res) {
        Person.deleteOne({name: req.params.name})
            .then(res.redirect('/'))
    },

    findOne: function(req, res) {
        Person.findOne({name: req.params.name})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}