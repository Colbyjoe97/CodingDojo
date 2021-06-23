const mongoose = require('mongoose')

module.exports = function(app) {
    const NoteSchema = new mongoose.Schema({
        note: {
            type: String,
            required: [true, "Note is required!"],
            minLength: [3, "Note must be at least 3 characters long!"]
        }
    }, {timestamps: true})
    mongoose.model("Note", NoteSchema)
}