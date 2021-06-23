using System;
using System.Collections.Generic;

namespace HungryNinja.Models
{
    public class Ninja
        {
            private int calorieIntake;
            public int calorieintake { get { return calorieIntake; } set { } }
            // public int calorieintake
            // {
            //     get
            //     {
            //         return calorieIntake;
            //     }
            //     set
            //     {
            //         // placeholder
            //     }
            // }
            public List<Food> FoodHistory = new List<Food>();
            public Ninja()
            {
                // FoodHistory = new List<Food>()
                // {
                    
                // };
            }
            public bool IsFull()
            {
                if (calorieIntake > 1200)
                {
                    return true;
                }
                return false;
            }
            public void Eat(Food item)
            {
                if (!IsFull())
                {
                    calorieIntake += item.Calories;
                    Console.WriteLine($"Ninja is still hungry... Total Calories: {calorieIntake}");
                    FoodHistory.Add(item);
                }
                else
                {
                    Console.WriteLine("Ninja is full!");
                }
            }
        }
}