class Card
{
    constructor(name, cost)
    {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card
{
    constructor(name, cost, power, res)
    {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target)
    {
        console.log(`${this.name} attacked ${target.name} for ${this.power} damage!`)
        target.res -= this.power;
        console.log(`${target.name} has ${target.res} HP remaining.`)
    }
}
class Effect extends Card
{
    constructor(name, cost, stat, magnitude)
    {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target )
    {
        if( target instanceof Unit )
        {
            console.log("-------")
            console.log(`${this.name} was used on ${target.name}...`)
            if(this.name == "Hard Algorithm")
            {
                console.log(`${target.name}'s ${this.stat} increased by 3!`)
                target.res += 3
                console.log(`${target.name} now has ${target.res} resiliance!`)
                console.log("-------")
            }
            else if (this.name == "Unhandled Promise Rejection")
            {
                console.log(`${target.name}'s ${this.stat} decreased by 2!`)
                target.res -= 2
                console.log(`${target.name} now has ${target.res} resiliance!`)
                console.log("-------")
            }
            else if (this.name == "Pair Programming")
            {
                console.log(`${target.name}'s ${this.stat} increased by 2!`)
                target.power += 2
                console.log(`${target.name} now has ${target.power} power!`)
                console.log("-------")
            }
        }
        else
        {
            console.log( "Target must be a unit!" );
        }
    }
}
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const HardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3);
const UnhandledPromise = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const PairProgramming = new Effect("Pair Programming", 3, "power", 2);


RedBeltNinja;
HardAlgorithm.play(RedBeltNinja);
BlackBeltNinja;
UnhandledPromise.play(RedBeltNinja);
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);