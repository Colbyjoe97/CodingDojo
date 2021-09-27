using System;
using System.Collections.Generic;

namespace DeckOfCards.Models
{
    public class Deck
    {
        public List<Card> deck;
        public Deck()
        {
            deck = new List<Card>()
            {
                new Card("Ace", "Spades", 1),
                new Card("Two", "Spades", 2),
                new Card("Three", "Spades", 3),
                new Card("Four", "Spades", 4),
                new Card("Five", "Spades", 5),
                new Card("Six", "Spades", 6),
                new Card("Seven", "Spades", 7),
                new Card("Eight", "Spades", 8),
                new Card("Nine", "Spades", 9),
                new Card("Ten", "Spades", 10),
                new Card("Jack", "Spades", 11),
                new Card("Queen", "Spades", 12),
                new Card("King", "Spades", 13),
                new Card("Ace", "Clubs", 14),
                new Card("Two", "Clubs", 15),
                new Card("Three", "Clubs", 16),
                new Card("Four", "Clubs", 17),
                new Card("Five", "Clubs", 18),
                new Card("Six", "Clubs", 19),
                new Card("Seven", "Clubs", 20),
                new Card("Eight", "Clubs", 21),
                new Card("Nine", "Clubs", 22),
                new Card("Ten", "Clubs", 23),
                new Card("Jack", "Clubs", 24),
                new Card("Queen", "Clubs", 25),
                new Card("King", "Clubs", 26),
                new Card("Ace", "Hearts", 27),
                new Card("Two", "Hearts", 28),
                new Card("Three", "Hearts", 29),
                new Card("Four", "Hearts", 30),
                new Card("Five", "Hearts", 31),
                new Card("Six", "Hearts", 32),
                new Card("Seven", "Hearts", 33),
                new Card("Eight", "Hearts", 34),
                new Card("Nine", "Hearts", 35),
                new Card("Ten", "Hearts", 36),
                new Card("Jack", "Hearts", 37),
                new Card("Queen", "Hearts", 38),
                new Card("King", "Hearts", 39),
                new Card("Ace", "Diamonds", 40),
                new Card("Two", "Diamonds", 41),
                new Card("Three", "Diamonds", 42),
                new Card("Four", "Diamonds", 43),
                new Card("Five", "Diamonds", 44),
                new Card("Six", "Diamonds", 45),
                new Card("Seven", "Diamonds", 46),
                new Card("Eight", "Diamonds", 47),
                new Card("Nine", "Diamonds", 48),
                new Card("Ten", "Diamonds", 49),
                new Card("Jack", "Diamonds", 50),
                new Card("Queen", "Diamonds", 51),
                new Card("King", "Diamonds", 52),
            };
        }
        public Card Deal()
        {
            var firstCard = deck[0];
            deck.RemoveAt(0);
            return firstCard;
        }
        public void Reset()
        {
            Deck newDeck = new Deck();
            this.deck = newDeck.deck;
        }
        public void Shuffle()
        {
            Random rand = new Random();
            for(int i = 0; i < deck.Count; i++)
            {
                var randNum = rand.Next(0, deck.Count);
                var temp = deck[i];
                deck[i] = deck[randNum];
                deck[randNum] = temp;
            }
        }
    }
}