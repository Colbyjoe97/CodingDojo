const express = require("express");
const faker = require("faker");
const cors = require("cors");
const app = express();
const port = 8000;

class User {
    constructor() {
        this.id = faker.commerce.id();
        this.firstName = faker.commerce.firstName();
        this.lastName = faker.commerce.lastName();
        this.phoneNumber = faker.commerce.phoneNumber();
        this.email = faker.commerce.email();
        this.password = faker.commerce.password();
    }
}

class Company {
    constructor() {
        this.id = faker.commerce.id();
        this.name = faker.commerce.name();
        this.street = faker.commerce.street();
        this.city = faker.commerce.city();
        this.state = faker.commerce.state();
        this.zipCode = faker.commerce.zipCode();
        this.country = faker.commerce.country();
    }
}

app.listen(port, () => console.log(`Listening on port ${port}`));