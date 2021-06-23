const mongoose = require('mongoose')
const Note = mongoose.model("Note")

module.exports = {
    index: function(req, res) {
        Note.find({}, function(err, note) {
            if(err) {
                res.json({message: "Error on find: ", err})
            }
            else {
                res.json({message: "Successfully found notes!", notes: note})
            }
        })
        .sort({createdAt: 'descending'})
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