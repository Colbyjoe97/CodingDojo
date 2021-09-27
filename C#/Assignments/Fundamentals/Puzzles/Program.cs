using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            // Random Array
            // RandomArray();

            // Coin Toss
            // CoinFlip();
            // MultiFlip(5);

            // Names
            Names();

        }
        public static void RandomArray(){
            int minRange = 5;
            int maxRange = 25;

            int[] array = new int[10];
            Random randNum = new Random();
            int min = 25;
            int max = array[0];
            int sum = 0;
            for (var i = 0; i < array.Length; i++){
                array[i] = randNum.Next(minRange, maxRange);
                if (array[i] > max){
                    max = array[i];
                }
                if (array[i] < min){
                    min = array[i];
                }
                sum += array[i];
            }
            Console.WriteLine($"Max: {max}, Min: {min}, Sum: {sum}");
            Console.WriteLine("[{0}]", string.Join(", ", array));
        }

        public static void CoinFlip(){
            Console.WriteLine("Tossing A Coin!");
            Random randNum = new Random();
            int num = randNum.Next(0, 2);
            if (num == 0){
                Console.WriteLine("Tails!");
            }
            else if (num == 1){
                Console.WriteLine("Heads!");
            }
        }

        public static void MultiFlip(int times){
            double headsCount = 0.00;
            double tailsCount = 0.00;
            Console.WriteLine($"Tossing {times} Coins!");
            for (var i = 0; i <= times; i++){
            Random randNum = new Random();
            int num = randNum.Next(0, 2);
                if (num == 0){
                    Console.WriteLine("Tails!");
                    tailsCount++;
                }
                else if (num == 1){
                    Console.WriteLine("Heads!");
                    headsCount++;
                }
            }
            double ratio = headsCount / tailsCount;
            Console.WriteLine($"Heads to Tails ratio: {ratio}");
        }

        public static List<string> Names()
        {
            // Create an list with the values: Todd, Tiffany, Charlie, Geneva, Sydney
            List<string> names = new List<string>()
            {
                "Todd", "Tiffany", "Charlie", "Geneva", "Sydney"
            };

            Random rand = new Random();

            // shuffle names
            for(var i=0; i<names.Count/2; i++)
            {
                // swap names[i] with names[randomIndex]
                int randomIndex = rand.Next(names.Count);
                string temp = names[randomIndex];
                names[randomIndex] = names[i];
                names[i] = temp;
            }

            // remove names not larger than 5 characters
            for(var i = 0; i < names.Count; i++)
            {
                if(names[i].Length <= 5)
                    names.RemoveAt(i);
            }
            
            // print new order of names
            foreach(var name in names)
            {
                Console.WriteLine(name);
            }

            return names;
        }
    }
}

