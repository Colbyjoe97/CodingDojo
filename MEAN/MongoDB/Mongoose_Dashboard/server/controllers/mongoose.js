const mongoose = require('mongoose')
const Mong = mongoose.model('Mongoose')

module.exports = {
    index: function(req, res) {
        Mong.find()
            .then(data => res.render('index', {mongoose: data}))
            .catch(err => res.json(err))
    },

    create: function(req, res) {
        const mongoose = new Mong()
        mongoose.name = req.body.name;
        mongoose.age = req.body.age;
        mongoose.save()
            .then(response => console.log("Mongoose Created", response))
            .catch(err => console.log("There's an error!", err))

        res.redirect("/")
    },

    delete: function(req, res) {
        Mong.deleteOne({_id: req.params.id})
            .then(res.redirect('/'))
    },

    viewOne: function(req, res) {
        Mong.findOne({_id: req.params.id})
            .then(data => res.render('view', {mongoose: data}))
            .catch(err => res.json(err))
    },

    editPage: function(req, res) {
        Mong.findOne({_id: req.params.id})
            .then(data => res.render('edit', {mongoose: data}))
            .catch(err => res.json(err))
    },

    edit: function(req, res) {
        Mong.updateOne({_id: req.params.id}, req.body,
            {
                runValidators: true,
                new: true,
                useFindAndModify: false
            })
            .then(updatedMongoose => res.json({results: updatedMongoose}))
            .catch(err => res.json(err));
            res.redirect('/')
    }
}