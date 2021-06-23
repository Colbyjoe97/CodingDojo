const express = require("express");
const cors = require("cors");
const faker = require("faker");
const app = express();
const port = 8000;
app.use(express.json()) // Allows us to work with json

class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    const user1 = new User()
    res.json( user1 );
});

app.get("/api/companies/new", (req, res) => {
    const comp1 = new Company()
    res.json( comp1 );
});

app.get("/api/user/company", (req, res) => {
    const user1 = new User()
    const comp1 = new Company()
    res.json({ "User": user1, "Company": comp1 } )
})

app.listen(port, () => console.log(`Listening on port ${port}`));