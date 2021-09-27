using System;
using System.Collections.Generic;
using HungryNinja.Interfaces;

namespace HungryNinja.Models
{
    class SpiceHound : Ninja
    {
        public override bool IsFull
        {
            get { return calorieIntake > 1200; }
        }
        public override void Consume(IConsumable item)
        {
            if (!IsFull)
            {
                calorieIntake += item.Calories;
                if (item.IsSpicy)
                {
                    calorieIntake += 5;
                }
                ConsumptionHistory.Add(item);
                Console.WriteLine($"SpiceHound Consumed {item.Name}, Calorie Intake = {calorieIntake}");
            }
            else if (IsFull)
            {
                Console.WriteLine("SpiceHound is full!");
            }
        }
    }
}


