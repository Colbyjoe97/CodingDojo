using System;
using DeckOfCards.Models;

namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Player jeff = new Player("Jeff");
            Deck cards = new Deck();
            cards.Shuffle();
            jeff.hand.Add(cards.Deal());
            jeff.Draw(cards);
            jeff.Discard(jeff.hand[0]);
            jeff.listHand();
        }
    }
}