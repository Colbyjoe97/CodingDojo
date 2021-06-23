const mongoose = require('mongoose')

module.exports = function(app) {
    const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is required"]
        }
    }, {timestamps: true})
    mongoose.model("User", UserSchema)
}