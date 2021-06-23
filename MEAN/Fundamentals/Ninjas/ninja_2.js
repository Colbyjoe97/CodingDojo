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
        console.log(`${this.name} drank sake restoring 10 health and now has ${this.health} health remaining`)
    }
    this.punch = function(target) {
        if(target instanceof Ninja) {
            target.health -= 5
            console.log(`${this.name} punched ${target.name} for 5 health!`)
            console.log(`${target.name} has ${target.health} remaining health.`)
        }
        else {
            console.log("You can't attack that target!")
        }
    }
    this.kick = function(target) {
        if(target instanceof Ninja) {
            let damage = strength * 15
            target.health -= damage
            console.log(`${this.name} kicked ${target.name} for ${damage}!`)
            console.log(`${target.name} has ${target.health} remaining health!`)
        }
        else {
            console.log("You can't attack that target!")
        }
    }
}

let nonNinja = "Not a ninja"

var ninja1 = new Ninja("Sakurai")
var ninja2 = new Ninja("Jin")
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.punch(ninja2)
ninja1.kick(ninja2)