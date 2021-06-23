const studentController = require("../controllers/student.controller")

module.exports = app => {
    app.get("/api/students", studentController.findAllStudents)
    app.get("/api/students/:id", studentController.findOneStudent)
    app.post("/api/students/create", studentController.createNewStudent)
    app.put("/api/students/update/:id", studentController.updateStudent)
    app.delete("/api/students/delete/:id", studentController.deleteStudent)
}