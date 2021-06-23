const mongoose = require('mongoose')

module.exports = function(app) {
    const PeopleSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true]
        }
    }, {timestamps: true})

    const People = mongoose.model('Person', PeopleSchema)
}