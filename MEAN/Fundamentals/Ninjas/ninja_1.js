function Ninja(name) {
    this.name = name
    this.health = 100
    var speed = 3
    var strength = 3
    this.sayName = function() {
        console.log(`My ninja name is ${this.name}!`)
    }
    this.showStats = function() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
    }
    this.drinkSake = function() {
        this.health += 10
        console.log(`${this.name} drank sake restoring 10HP and now has ${this.health} health remaining`)
    }
}

var ninja1 = new Ninja("Sakurai")
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()