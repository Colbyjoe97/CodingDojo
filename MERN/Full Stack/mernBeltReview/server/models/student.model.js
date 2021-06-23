const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [2, "First name must be at least 2 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [5, "Last name must be at least 5 characters long"]
    },
    nickName: {
        type: String
    },
    beltLevel: {
        type: String,
        required: [true, "Student must have a belt level"],
        default: "Yellow"
    },
    imageUrl: {
        type: String,
        required: [true, "Student must have a photo"]
    },
    isVeteran: {
        type: Boolean,
        default: false
    },
    isPartTime: {
        type: Boolean,
        default: false
    },
    graduationDate: {
        type: Date,
        required: [true, "Graduation date is required"]
    }
}, {timestamps: true});

const Student = mongoose.model("Product", StudentSchema)

module.exports = Student