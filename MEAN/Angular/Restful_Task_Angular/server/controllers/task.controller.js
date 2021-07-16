const mongoose = require('mongoose')
const Task = mongoose.model("Task")

module.exports = {

    index: function(req,res) {
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    getOne: function(req, res) {
        Task.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: function(req, res) {
        const task = new Task()
        task.title = req.body.title
        task.description = req.body.description
        task.completed = req.body.completed
        task.save()
            .then(newTask => res.json(newTask))
            .catch(err => console.log("Errors on create: ", err))
    },

    delete: function(req, res) {
        console.log("@@@@@@@@@@@@")
        console.log("Deleting ", req.params.id)
        console.log("@@@@@@@@@@@@")
        Task.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
    },

    update: function(req, res) {
        Task.updateOne({_id: req.params.id}, req.body,
            {
                runValidators: true,
                new: true,
                useFindAndModify: false
            })
            .then(updatedTask => res.json({results: updatedTask}))
            .catch(err => res.json(err))
    }
}