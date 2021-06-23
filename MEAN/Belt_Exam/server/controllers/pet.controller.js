const mongoose = require('mongoose')
const Pet = mongoose.model("Pet")

module.exports = {

    index: function(req, res) {
        Pet.find({}, function(err, pet) {
            if(err) {
                res.json({message: "Error on find: ", err})
            }
            else {
                res.json({mesage: "Found all pets! ", pets: pet})
            }
        })
        .sort({type: 'ascending'})
    },

    getOne: function(req, res) {
        Pet.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: function(req, res) {
        const pet = new Pet()
        pet.name = req.body.name
        pet.type = req.body.type
        pet.description = req.body.description
        pet.skill_one = req.body.skill_one
        pet.skill_two = req.body.skill_two
        pet.skill_three = req.body.skill_three
        pet.likeCount = 0
        pet.save()
            .then(newPet => res.json(newPet))
            .catch(err => res.json(err))
    },

    like: function(req, res) {
        Pet.findOne({_id: req.params.id})
            .then(pet => {
                pet.likeCount++
                pet.save()
                    .then(data => res.json(data))
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    },

    delete: function(req, res) {
        Pet.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update: function(req, res) {
        Pet.updateOne({_id: req.params.id}, req.body,
            {
                runValidators: true,
                new: true,
                useFindAndModify: false
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}