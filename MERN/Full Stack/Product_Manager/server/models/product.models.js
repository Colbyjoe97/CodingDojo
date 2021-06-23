const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be at least 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [5, "Description must be at least 5 characters long"]
    }
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product