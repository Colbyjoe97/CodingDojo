const mongoose = require('mongoose')

module.exports = function(app) {
    const PetSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Pet name is required"],
            minLength: [3, "Pet name must be at least 3 characters long"]
        },
        type: {
            type: String,
            required: [true, "Pet type is required"],
            minLength: [3, "Pet type must be at least 3 characters long"]
        },
        description: {
            type: String,
            required: [true, "Pet description is required"],
            minLength: [3, "Pet description must be at least 3 characters long"],
        },
        skill_one: {
            type: String
        },
        skill_two: {
            type: String
        },
        skill_three: {
            type: String
        },
        likeCount: {
            type: Number
        }
    }, {timestamps: true})
    mongoose.model("Pet", PetSchema)
}