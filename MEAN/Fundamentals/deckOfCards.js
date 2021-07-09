class Card {
    constructor(suit, stringValue, numberValue) {
        this.suit = suit
        this.stringValue = stringValue
        this.numberValue = numberValue,
        
        this.show = function() {
            console.log(`The card being shown is the ${stringValue} of ${suit} with a value of ${this.numberValue}.`)
        }
    }
}

class Deck {
    constructor() {
        var suit = ['Hearts','Diamonds','Spades','Clubs']
        var stringValue = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
        this.deck = []
        this.orderedDeck = []
        for(let i = 0; i < suit.length; i++) {
            for(let j = 0; j < stringValue.length; j++) {
                var card = new Card(suit[i], stringValue[j], j + 1)
                this.deck.push(card)
                this.orderedDeck.push(card)
            }
        }
        this.shuffle = function() {
            for(let i = 0; i < 52; i++) {
                var randNum = Math.floor(Math.random() * 51)
                var temp = this.deck[i]
                this.deck[i] = this.deck[randNum]
                this.deck[randNum] = temp
            }
        }
        this.show = function() {
            for(let i = 0; i < this.deck.length; i++) {
                this.deck[i].show()
            }
        }
        this.reset = function() {
            this.deck = this.orderedDeck
        }
        this.deal = function(player) {
            player.hand.push(this.deck[this.deck.length-1])
            let newDeck = []
            for(let i = 1; i < this.deck.length; i++) {
                newDeck.push(this.deck[i])
            }
            this.deck = newDeck
            newDeck = []
        }
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.hand = []

        this.discard = function(idx) {
            let temp = this.hand[idx]
            this.hand[this.hand.length - 1] = temp
            this.hand[idx] = this.hand[this.hand.length - 1]
            this.hand.pop()
        }
    }
}

var deck = new Deck()
var player = new Player("Jeff")
deck.shuffle()
deck.show()
deck.reset()
deck.show()
deck.deal(player)
deck.deal(player)
deck.deal(player)
console.log(player.hand)
console.log("--------------------")
player.discard(1)
player.discard(1)
console.log(player.hand)
console.log("--------------------")