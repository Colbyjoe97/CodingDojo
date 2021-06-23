using System;
using System.Collections.Generic;
using HungryNinja.Models;

namespace HungryNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            Ninja jack = new Ninja();
            Buffet allYouCanEat = new Buffet();
            Console.WriteLine("######################");
            while (!jack.IsFull())
            {
                jack.Eat(allYouCanEat.Serve());
            }
            Console.WriteLine("Jack is full!");
            Console.WriteLine("######################");
            Console.WriteLine("Jack's Food History");
            Console.WriteLine("######################");
            for (var i = 0; i < jack.FoodHistory.Count; i++)
            {
                Console.WriteLine(jack.FoodHistory[i].Name);
            }
        }
    }
}