const mongoose = require('mongoose')


module.exports = function(app) {
    const MongooseSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        age: {
            type: Number,
            required: [true, "Age is required"]
        }
    }, {timestamps: true})

    const Mong = mongoose.model('Mongoose', MongooseSchema)
}