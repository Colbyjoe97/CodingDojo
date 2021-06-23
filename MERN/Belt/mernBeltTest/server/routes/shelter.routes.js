const shelterController = require("../controllers/shelter.controller")

module.exports = app => {
    app.get("/api/shelters", shelterController.findAllShelters)
    app.get("/api/shelters/:id", shelterController.findOneShelter)
    app.post("/api/shelters/create", shelterController.createNewShelter)
    app.put("/api/shelters/update/:id", shelterController.updateShelter)
    app.delete("/api/shelters/delete/:id", shelterController.deleteShelter)
}