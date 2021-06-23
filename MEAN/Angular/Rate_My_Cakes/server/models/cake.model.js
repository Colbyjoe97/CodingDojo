const mongoose = require('mongoose')

module.exports = function(app) {
    const ReactSchema = new mongoose.Schema({
        rating: {
            type: Number,
            required: [true]
        },
        comment: {
            type: String,
            required: [true]
        }
    }, {timestamps: true})
    mongoose.model("React", ReactSchema)


    const CakeSchema = new mongoose.Schema({
        baker: {
            type: String,
            required: [true, "Baker's name is required"]
        },
        image: {
            type: String,
            required: [true, "Cake image is required"]
        },
        reactions: [ReactSchema]
    }, {timestamps: true})
    mongoose.model("Cake", CakeSchema)

}