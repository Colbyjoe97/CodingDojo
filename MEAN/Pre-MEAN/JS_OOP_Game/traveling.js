var tigger = { character: "Tigger" }
var pooh = { character: "Winnie the Pooh" }
var piglet = { character: "Piglet" }
var bees = { character: "Bees" }
var owl = { character: "Owl" }
var chris = { character: "Christopher Robin" }
var rabbit = { character: "Rabbit" }
var gopher = { character: "Gopher" }
var kanga = { character: "Kanga" }
var eeyore = { character: "Eeyore" }
var heff = { character: "Heffalumps" }

tigger.north = pooh

pooh.east = bees
pooh.west = piglet
pooh.north = chris
pooh.south = tigger

piglet.north = owl
piglet.east = pooh

owl.south = piglet
owl.east = chris

chris.north = kanga
chris.west = owl
chris.east = rabbit
chris.south = pooh

bees.north = rabbit
bees.west = pooh

rabbit.east = gopher
rabbit.south = bees
rabbit.west = chris

gopher.west = rabbit

kanga.south = chris
kanga.north = eeyore

eeyore.south = kanga
eeyore.east = heff

heff.west = eeyore

var player = { location: tigger }

function move(direction){
    if(direction == "north"){
        if(player.location.north == null){
            console.log("You attempt to head North, but the path is blocked.")
        }
        else {
            player.location = player.location.north;
            console.log(`You head North and arrive at ${player.location.character}'s house!`);
        }
    }
    if(direction == "south"){
        if(player.location.south == null){
            console.log("You attempt to head South, but the path is blocked.")
        }
        else {
            player.location = player.location.south;
            console.log(`You head South and arrive at ${player.location.character}'s house!`);
        }
    }
    if(direction == "east"){
        if(player.location.east == null){
            console.log("You attempt to head East, but the path is blocked.")
        }
        else {
            player.location = player.location.east;
            console.log(`You head East and arrive at ${player.location.character}'s house!`);
        }
    }
    if(direction == "west"){
        if(player.location.west == null){
            console.log("You attempt to head West, but the path is blocked.")
        }
        else {
            player.location = player.location.west;
            console.log(`You head West and arrive at ${player.location.character}'s house!`);
        }
    }
}
console.log(player.location)
// move("north");
// move("west");
// move("north");
// move("east");
// move("north");
// move("north");
// move("east");