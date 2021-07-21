const mongoose = require('mongoose')

module.exports = function(app) {
    const QuoteSchema = new mongoose.Schema({
        quote: {
            type: String,
            required: [true, "Quote is required"],
            minLength: [3, "Quote must be at least 3 characters long"]
        },
        voteCount: {
            type: Number,
            default: 0
        }
    }, {timestamps: true})
    mongoose.model("Quote", QuoteSchema)

    const AuthorSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Author name is required"],
            minLength: [3, "Author name must be at least 3 characters long"]
        },
        quotes: [QuoteSchema]
    }, {timestamps: true})
    mongoose.model("Author", AuthorSchema)
}

// ONE MODEL METHOD
// const AuthorSchema = new mongoose.Schema({
// 	name: {type: String, required: true, minlength: 3},
// 	quotes: [{
// 		content: {
// 			type: String,
// 			required: true,
// 			minlength: 3,
// 		},
// 		votes: {
// 			type: Number,
// 			default: 0
// 		}
// 	}],
// 	},
// 	{timestamps: true})
// const Author = mongoose.model('Author', AuthorSchema);

// module.exports = Author