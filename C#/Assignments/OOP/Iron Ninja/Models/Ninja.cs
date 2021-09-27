using System;
using System.Collections.Generic;
using HungryNinja.Interfaces;

namespace HungryNinja.Models
{
    abstract class Ninja
    {
        protected int calorieIntake;
        public List<IConsumable> ConsumptionHistory;
        public Ninja()
        {
            calorieIntake = 0;
            ConsumptionHistory = new List<IConsumable>();
        }
        public abstract bool IsFull { get; }
        public abstract void Consume(IConsumable item);
        public int calorieintake { get { return calorieIntake; } set { } } // <-- Short Way





        // public int calorieintake // <-- Long Way
        // {
        //     get
        //     {
        //         return calorieIntake;
        //     }
        //     set
        //     {
        // placeholder
        //     }
        // }


        // public List<Food> FoodHistory = new List<Food>();<-- Short Way
        // public Ninja()
        // {
        //     FoodHistory = new List<Food>() // <-- Long Way
        //     {

        //     };
        // }


        // public bool IsFull()
        // {
        //     if (calorieIntake > 1200)
        //     {
        //         return true;
        //     }
        //     return false;
        // }


        // public void Eat(Food item)
        // {
        //     if (!IsFull())
        //     {
        //         calorieIntake += item.Calories;
        //         Console.WriteLine($"Ninja is still hungry... Total Calories: {calorieIntake}");
        //         FoodHistory.Add(item);
        //     }
        //     else
        //     {
        //         Console.WriteLine("Ninja is full!");
        //     }
        // }
    }
}