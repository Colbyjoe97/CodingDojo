using System;
using System.Collections.Generic;
using HungryNinja.Models;

namespace HungryNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            SweetTooth sweet = new SweetTooth();
            SpiceHound spicy = new SpiceHound();
            Buffet Eat = new Buffet();
            var  sweetCount = 0;
            var  spiceCount = 0;
            Console.WriteLine("######################");
            while (!sweet.IsFull)
            {
                sweet.Consume(Eat.Serve());
                sweetCount += 1;
            }
            Console.WriteLine("######################");
            while (!spicy.IsFull)
            {
                spicy.Consume(Eat.Serve());
                spiceCount += 1;

            }
            Console.WriteLine("-----------------");
            if (sweetCount > spiceCount)
            {
                Console.WriteLine($"SweetTooth consumed the most items with {sweetCount} total items!");
            }
            else if (spiceCount > sweetCount)
            {
                Console.WriteLine($"SpiceHound consumed the most items with {spiceCount} total items!");
            }
            else
            {
                Console.WriteLine($"Both contestants consumed {spiceCount} items!");
            }
            Console.WriteLine("-----------------");
        }
    }
}