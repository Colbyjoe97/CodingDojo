class Ninja
{
    constructor(name, health, speed, strength)
    {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName()
    {
        console.log(`Name: ${this.name}`);
    }
    showStats()
    {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }
    drinkSake()
    {
        this.health += 10;
        console.log(`${this.name} drank Sake and gained 10 HP. ${this.name} now has ${this.health} HP!`)

    }
}
class Sensei extends Ninja
{
    constructor(name, health, speed, strength, wisdom)
    {
        super(name, health, speed);
        this.wisdom = 10;
    }
    speakWisdom()
    {
        console.log(`${this.name}'s Wisdom: ${this.wisdom}`);
    }
    drinkSake()
    {
        this.health += 10;
        console.log(`${this.name} drank Sake and gained 10 HP. ${this.name} now has ${this.health} HP!`)
    }
    showStats()
    {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}, Wisdom: ${this.wisdom}`);
    }
}



const ninja1 = new Ninja("Sakurai", 100)
const sensei1 = new Sensei("Master Splinter", 200)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log("--------------------")
sensei1.speakWisdom();
sensei1.showStats();
sensei1.drinkSake();