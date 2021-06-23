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
            // MultiFlip();

            // Names
            // Names();

        }
        public static void RandomArray(){
            int minRange = 5;
            int maxRange = 25;

            int[] array = new int[7];
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

        public static void MultiFlip(){
            int times = 5;
            Console.WriteLine($"Tossing {times} Coins!");
            for (var i = 0; i <= times; i++){
            Random randNum = new Random();
            int num = randNum.Next(0, 2);
                if (num == 0){
                    Console.WriteLine("Tails!");
                }
                else if (num == 1){
                    Console.WriteLine("Heads!");
                }

            }
        }

        public static void Names(){
            List<string> names = new List<string>();
            names.Add("Todd");
            names.Add("Tiffany");
            names.Add("Charlie");
            names.Add("Geneva");
            names.Add("Sydney");

            string temp = names[0];
            for (var i = 0; i < names.Count; i++){
                if (names[i] != names[names.Count - 1]){
                    names[i] = names[i + 1];
                }
                else if (names[i] == names[names.Count - 1]){
                    names[names.Count - 1] = temp;
                }
                if (names[i].Length > 5){
                    Console.WriteLine(names[i]);
                }
            }
        }
    }
}

