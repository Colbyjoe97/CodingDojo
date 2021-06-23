const mongoose = require('mongoose')


module.exports = function(app) {
    const QuoteSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        quote: {
            type: String,
            required: [true, "Quote is required"],
            minLength: [5, "Quote must be at least 5 characters long"]
        }
    }, {timestamps: true})
    const Quote = mongoose.model('Quote', QuoteSchema) // Not "used" but needed
}