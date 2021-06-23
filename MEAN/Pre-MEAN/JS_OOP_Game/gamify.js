var tigger = {
    character: "Tigger",
    greet: function() {
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
    }
 }
var pooh = {
    character: "Winnie the Pooh",
    greet: function() {
        console.log("I hope you brought honey")
    }
}
var piglet = {
    character: "Piglet",
    greet: function() {
        console.log("Oh d-d-deer! I wasn't expecting company!")
    }
}
var bees = {
    character: "Bees",
    greet: function() {
        console.log("Bees?")
    }
}
var owl = {
    character: "Owl",
    greet: function() {
        console.log("Hoooo's there?")
    }
}
var chris = {
    character: "Christopher Robin",
    greet: function() {
        console.log("I'm Christopher Robin")
    }
}
var rabbit = {
    character: "Rabbit",
    greet: function() {
        console.log("Hop on in!")
    }
}
var gopher = {
    character: "Gopher",
    greet: function() {
        console.log("Nom nom")
    }
}
var kanga = {
    character: "Kanga",
    greet: function() {
        console.log("Kanga line!")
    }
}
var eeyore = {
    character: "Eeyore",
    greet: function() {
        console.log("I'm sad")
    }}
var heff = {
    character: "Heffalumps",
    greet: function() {
        console.log("Heff Heff")
    }
}

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

var player = {
    location: tigger,
    honey: false
}

function pickUp() {
    if(player.location == bees) {
        console.log("You found some honey!")
        player.honey = true
    }
    else {
        console.log("There was no honey here..")
    }
}
function mission(){
    charList = [tigger, pooh, piglet, chris, owl, rabbit, gopher, kanga, eeyore, heff]
    var rand = Math.floor(Math.random()*Math.floor(charList.length));
    recipient = charList[rand];
    recipient.objective = true;
    console.log("Well hello there adventurer... " + recipient.character + " is in need of some honey! Please lend a helping hand and get some honey from the bees and take it over.");
}

function drop(){
    if(player.location.objective == true){
        console.log("Congratulations!!! " + player.location.character + " is thrilled to have received some fresh honey!")
    }
    else{
        console.log("You can't drop the honey here, nobody requested it!")
    }
}

function move(direction){
    if(direction == "north"){
        if(player.location.north == null){
            console.log("You attempt to head North, but the path is blocked.")
        }
        else {
            player.location = player.location.north;
            console.log(`You head North and arrive at ${player.location.character}'s house!`);
            player.location.greet();
        }
    }
    if(direction == "south"){
        if(player.location.south == null){
            console.log("You attempt to head South, but the path is blocked.")
        }
        else {
            player.location = player.location.south;
            console.log(`You head South and arrive at ${player.location.character}'s house!`);
            player.location.greet();
        }
    }
    if(direction == "east"){
        if(player.location.east == null){
            console.log("You attempt to head East, but the path is blocked.")
        }
        else {
            player.location = player.location.east;
            console.log(`You head East and arrive at ${player.location.character}'s house!`);
            player.location.greet();
        }
    }
    if(direction == "west"){
        if(player.location.west == null){
            console.log("You attempt to head West, but the path is blocked.")
        }
        else {
            player.location = player.location.west;
            console.log(`You head West and arrive at ${player.location.character}'s house!`);
            player.location.greet();
        }
    }
}

mission();
move("north");
move("east");
pickUp();
move("north");
move("west");
move("north");
move("north");
move("east");
drop();