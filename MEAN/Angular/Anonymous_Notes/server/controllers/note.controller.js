const mongoose = require('mongoose')
const Note = mongoose.model("Note")

module.exports = {
    index: function(req, res) {
        Note.find().sort({createdAt: 'descending'})
            .then(data => res.json(data))
            .then(err => res.json(err))
    },

    create: function(req, res) {
        const note = new Note()
        note.note = req.body.note
        note.save()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    delete: function(req, res) {
        Note.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}