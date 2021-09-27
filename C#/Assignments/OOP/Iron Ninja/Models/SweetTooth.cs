using System;
using System.Collections.Generic;
using HungryNinja.Interfaces;

namespace HungryNinja.Models
{
    class SweetTooth : Ninja
    {
        // provide override for IsFull (Full at 1500 Calories)
        public override bool IsFull
        {
            get { return calorieIntake > 1200; }
        }
        public override void Consume(IConsumable item)
        {
            if (!IsFull)
            {
                calorieIntake += item.Calories;
                if (item.IsSweet)
                {
                    calorieIntake += 10;
                    Console.WriteLine($"{item.Name} was sweet!");
                }
                ConsumptionHistory.Add(item);
                Console.WriteLine($"SweetTooth Consumed {item.Name}, Calorie Intake = {calorieIntake}");
            }
            else if (IsFull)
            {
                Console.WriteLine("SweetTooth is full!");
                return;
            }
        }
    }
}