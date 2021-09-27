namespace DeckOfCards.Models
{
    public class Card
    {
        public string stringVal;
        public string Suit;
        public int Val;

        public Card(string strVal, string suit, int val)
        {
            stringVal = strVal;
            Suit = suit;
            Val = val;
        }
    }
}