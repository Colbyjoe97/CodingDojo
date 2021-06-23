var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

// Print John's age:
console.log(users[1].age)

// Print name of the first object:
console.log(users[0].name)

// Print name and age of each user using a for loop:
for (var i = 0; i < users.length; i++) {
    console.log(users[i].name)
    console.log(users[i].age)
}