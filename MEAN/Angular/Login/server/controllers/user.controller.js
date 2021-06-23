const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, user) {
            if(err) {
                res.json({message: "Error on finding users: ", err})
            }
            else {
                res.json({message: "Successfully found users!", users: user})
            }
        })
    },

    getOne: function(req, res) {
        User.findOne({name: req.params.name})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: function(req, res) {
        const user = new User()
        user.name = req.body.name
        user.save()
            .then(newUser => res.json(newUser))
            .catch(err => res.json(err))
    }
}