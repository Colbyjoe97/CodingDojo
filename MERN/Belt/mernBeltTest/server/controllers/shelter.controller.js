const Shelter = require("../models/shelter.model")

module.exports.findAllShelters = (req,res) => {
    Shelter.find()
        .then(allShelters => res.json({results: allShelters}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.findOneShelter = (req, res) => {
    Shelter.findOne({_id: req.params.id})
        .then(oneShelter => res.json({results: oneShelter}))
        .catch(err => res.json(err));
}

module.exports.createNewShelter = (req, res) => {
    Shelter.create(req.body)
        .then(newShelter => res.json({results: newShelter}))
        .catch(err => res.json(err));
}

module.exports.updateShelter = (req, res) => {
    Shelter.updateOne({_id: req.params.id}, req.body,
        {
            runValidators: true,
            new: true,
            useFindAndModify: false
        })
        .then(updatedShelter => res.json({results: updatedShelter}))
        .catch(err => res.json(err));
}

module.exports.deleteShelter = (req, res) => {
    Shelter.deleteOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json(err));
}