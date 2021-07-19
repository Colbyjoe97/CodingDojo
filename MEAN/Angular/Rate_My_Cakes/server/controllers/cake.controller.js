const mongoose = require('mongoose')
const Cake = mongoose.model("Cake")
const React = mongoose.model('React')

module.exports = {

    index: function(req, res) {
        Cake.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    getOne: function(req, res) {
        Cake.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: function(req, res) {
        const cake = new Cake()
        cake.baker = req.body.baker
        cake.image = req.body.image
        cake.save()
            .then(newCake => res.json(newCake))
            .catch(err => console.log("Errors on create: ", err))
    },

    delete: function(req, res) {
        console.log("Deleting ", req.params.id)
        Cake.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
    },

    update: function(req, res) {
        Cake.updateOne({_id: req.params.id}, req.body,
            {
                runValidators: true,
                new: true,
                useFindAndModify: false
            })
            .then(updatedCake => res.json({results: updatedCake}))
            .catch(err => res.json(err))
    },

    rate: function(req, res) {
        const rating = new React()
        rating.rating = req.body.rating
        rating.comment = req.body.comment
        rating.save()
            .then(newRating => {
                Cake.findOne({_id: req.params.id})
                    .then(cake => {
                        cake.reactions.push(newRating)
                        cake.save()
                        .then(updatedCake => {
                            res.json({cakeRatings: updatedCake})
                        })
                        .catch(err => res.json(err))
                    })
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    }
}