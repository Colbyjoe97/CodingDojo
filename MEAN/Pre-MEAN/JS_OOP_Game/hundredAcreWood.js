var tigger = { character: "Tigger" }
var pooh = { character: "Winnie the Pooh" }
var piglet = { character: "Piglet" }
var bees = { character: "Bees" }
var owl = { character: "Owl" }
var chris = { character: "Christopher Robin" }
var rabbit = { character: "Rabbit" }
var gopher = { character: "Gopher" }
var kanga = { character: "Kanga" }

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