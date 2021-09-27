using System;
using System.Collections.Generic;
using HungryNinja.Interfaces;

namespace HungryNinja.Models
{
    public class Buffet : IConsumable
    {
        public List<IConsumable> Menu;
        public Buffet()
        {
            Menu = new List<IConsumable>()
                {
                    new Food("Hamburger", 850, false, false),
                    new Food("Slice of Pizza", 650, false, false),
                    new Food("Mashed Potatoes", 700, false, false),
                    new Food("Hotdog", 350, false, false),
                    new Food("Pancakes", 1000, false, false),
                    new Food("Peppers", 150, true, false),
                    new Food("Salad", 200, false, false),
                    new Drink("Cocktail", 300, true, false),
                    new Drink("Spicy Margarita", 400, true, false),
                    new Drink("Daiquiri", 500, false, true),
                    new Drink("Melon Ball", 500, false, true),
                };
        }

        public string Name { get; set; }
        public int Calories { get; set; }
        public bool IsSpicy { get; set; }
        public bool IsSweet { get; set; }
        public string GetInfo()
        {
            return $"{Name} (Food). Calories: {Calories}. Spicy? {IsSpicy}, Sweet? {IsSweet}.";
        }
        public IConsumable Serve()
            {
                Random rand = new Random();
                int randNum = rand.Next(0, Menu.Count - 1);
                var item = Menu[randNum];
                return item;
            }
        }
}