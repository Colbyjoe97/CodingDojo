const Student = require("../models/student.model")

module.exports.findAllStudents = (req,res) => {
    Student.find()
        .then(allStudents => res.json({results: allStudents}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.findOneStudent = (req, res) => {
    Student.findOne({_id: req.params.id})
        .then(oneStudent => res.json({results: oneStudent}))
        .catch(err => res.json(err));
}

module.exports.createNewStudent = (req, res) => {
    Student.create(req.body)
        .then(newStudent => res.json({results: newStudent}))
        .catch(err => res.json(err));
}

module.exports.updateStudent = (req, res) => {
    Student.updateOne({_id: req.params.id}, req.body,
        {
            runValidators: true,
            new: true,
            useFindAndModify: false
        })
        .then(updatedStudent => res.json({results: updatedStudent}))
        .catch(err => res.json(err));
}

module.exports.deleteStudent = (req, res) => {
    Student.deleteOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json(err));
}