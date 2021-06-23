using System;
using System.Collections.Generic;

namespace DeckOfCards.Models
{
    public class Player
    {
        public string Name;
        public List<Card> hand = new List<Card>();
        public Player(string name)
        {
            Name = name;
            hand = new List<Card>();
        }
        public void Draw(Deck item)
        {
            var card = item.deck[0];
            hand.Add(card);
            item.deck.Remove(item.deck[0]);
        }
        public void Discard(Card item)
        {
            hand.Remove(item);
        }
        public void listHand()
        {
            Console.WriteLine($"\nCurrently {Name} has:");
            foreach (var card in hand)
            {
                Console.Write($" {card.stringVal} of {card.Suit} ");

            }
        }
    }
}