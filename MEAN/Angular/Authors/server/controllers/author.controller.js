const mongoose = require('mongoose')
const Author = mongoose.model("Author")

module.exports = {

    index: function(req, res) {
        Author.find() 
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    getOne: function(req, res) {
        Author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: function(req, res) {
        const author = new Author()
        author.name = req.body.name
        author.save()
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.json(err))
    },

    delete: function(req, res) {
        Author.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update: function(req, res) {
        Author.updateOne({_id: req.params.id}, req.body,
            {
                runValidators: true,
                new: true,
                useFindAndModify: false
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
}