const mongoose = require('mongoose');

const ShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        minLength: [3, "Pet name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Pet type is required"],
        minLength: [3, "Pet type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Pet description is required"],
        minLength: [3, "Pet description must be at least 3 characters"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }
})

const Shelter = mongoose.model("Shelter", ShelterSchema)

module.exports = Shelter