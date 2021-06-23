using System;
using System.Collections.Generic;

namespace HungryNinja.Models
{
    public class Buffet
        {
            public List<Food> Menu;
            public Buffet()
            {
                Menu = new List<Food>()
                {
                    new Food("Hamburger", 850, false, false),
                    new Food("Slice of Pizza", 650, false, false),
                    new Food("Mashed Potatoes", 700, false, false),
                    new Food("Hotdog", 350, false, false),
                    new Food("Pancakes", 1000, false, false),
                    new Food("Peppers", 150, true, false),
                    new Food("Salad", 200, false, false),
                };
            }
            public Food Serve()
            {
                Random rand = new Random();
                int randNum = rand.Next(0, Menu.Count - 1);
                var item = Menu[randNum];
                return item;
            }
        }
}