class Ninja {
    constructor(name) {
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
        this.sayName = function() {
            console.log(`My name is ${this.name}!`)
        }
        this.showStats = function() {
            console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
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
                let damage = this.strength * 15
                target.health -= damage
                console.log(`${this.name} kicked ${target.name} for ${damage}!`)
                console.log(`${target.name} has ${target.health} remaining health!`)
            }
            else {
                console.log("You can't attack that target!")
            }
        }
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.name = name
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10

        this.speakWisdom = function() {
            this.drinkSake()
            console.log("Pride is not the opposite of shame, but it's source.")
        }
    }
}

let nonNinja = "Not a ninja"

var ninja1 = new Ninja("Naruto")
var ninja2 = new Ninja("Sasuke")
var sensei1 = new Sensei("Kakashi")
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.punch(ninja2)
ninja1.kick(ninja2)
sensei1.sayName()
sensei1.speakWisdom()