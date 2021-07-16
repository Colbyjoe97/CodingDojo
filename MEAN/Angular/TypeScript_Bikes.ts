class Bike {
    constructor(
        public price: number,
        public max_speed: number,
        public miles: number
    ){}
}
function displayInfo(bike: Bike) {
    console.log(`Price: ${bike.price}`)
    console.log(`Max Speed: ${bike.max_speed}`)
    console.log(`Total Miles: ${bike.miles}`)
}
function ride(bike: Bike) {
    console.log("Riding Bike..")
    bike.miles += 10
}
function reverse(bike: Bike) {
    console.log("Reversing..")
    bike.miles -= 5
}

const bike1 = new Bike(199, 20, 0)
const bike2 = new Bike(399, 40, 0)
const bike3 = new Bike(599, 60, 0)

displayInfo(bike1)
ride(bike1)
reverse(bike1)
displayInfo(bike2)
ride(bike2)
reverse(bike2)
displayInfo(bike3)
ride(bike3)
reverse(bike3)