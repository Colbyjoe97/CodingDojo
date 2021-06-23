const mongoose = require('mongoose')
const Author = mongoose.model("Author")
const Quote = mongoose.model("Quote")

module.exports = {

    index: function(req, res) {
        Author.find({}, function(err, author) {
            if(err) {
                res.json({message: "Error on find: ", err})
            }
            else {
                res.json({message: "Successfully found authors!", authors: author})
            }
        })
    },

    getOne: function(req, res) {
        Author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: function(req, res) {
        const author = new Author()
        author.name = req.body.name
        author.save()
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.json(err))
    },

    delete: function(req, res) {
        Author.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
    },

    update: function(req, res) {
        Author.updateOne({_id: req.params.id}, req.body,
            {
                runValidators: true,
                new: true,
                useFindAndModify: false
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    addQuote: function(req, res) {
        const quote = new Quote()
        quote.quote = req.body.quote
        quote.voteCount = 0
        quote.save()
            .then(newQuote => {
                Author.findOne({_id: req.params.id})
                    .then(author => {
                        author.quotes.push(newQuote)
                        author.save()
                        .then(updatedAuthor => {
                            res.json({authorQuotes: updatedAuthor})
                        })
                        .catch(err => res.json(err))
                    })
                    .catch(err => res.json(err))
            })
    },
    upVote: function(req, res) {
        Author.findOne({_id: req.params.authId})
            .then(author => {
                console.log("AUTHOR: ", author)
                console.log("Quote ID: ", req.params.quoteId)
                for(let a in author.quotes) {
                    if(author.quotes[a]._id == req.params.quoteId) {
                        console.log(author.quotes[a])
                        author.quotes[a].voteCount++
                    }
                }
                author.save()
                    .then(data => res.json(data))
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    },

    downVote: function(req, res) {
        Author.findOne({_id: req.params.authId})
            .then(author => {
                console.log("AUTHOR: ", author)
                console.log("Quote ID: ", req.params.quoteId)
                for(let a in author.quotes) {
                    if(author.quotes[a]._id == req.params.quoteId) {
                        console.log(author.quotes[a])
                        author.quotes[a].voteCount--
                    }
                }
                author.save()
                    .then(data => res.json(data))
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    },

    deleteQuote:  function(req,res){
        Author.findOneAndUpdate({"quotes._id":req.params.quote_id},
        {$pull: {quotes: {_id:req.params.quote_id}}},
        {
            new:true,
            runValidators:true
        })
        .then(data => res.json(data))
        .catch(errs => res.json(errs))
    }
}