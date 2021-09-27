using System;

namespace Basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            // int[] arr = { };
            int[] arr = { 1, 2, -3, 40, -5 };
            // PrintNumbers();
            // PrintOdd();
            // PrintSum();
            // LoopArray(arr);
            // FindMax(arr);
            // GetAvg(arr);
            Console.WriteLine("Odd Array: "+ string.Join(", ", OddArray()));
            // GreaterThanY(arr, 3);
            // SquareArray(arr);
            // EliminateNegatives(arr);
            // MinMaxAvg(arr);
            // ShiftFront(arr);
            // NumToStr(arr);
        }
        // 1 - Print 1-255
        // Print all integers 1-255
        public static void PrintNumbers()
        {
            for (var i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
        }

        // 2 - Print Odd 1-255
        // Print all of the odd integers from 1 to 255
        public static void PrintOdd(){
            for (var i = 1; i <= 255; i++){
                if (i % 2 != 0){
                    Console.WriteLine(i);
                }
            }
        }

        // 3 - Print Sum
        // Print all of the numbers from 0 to 255, but this time, also print the sum as you go.
        public static void PrintSum(){
            var sum = 0;
            for (var i = 0; i <= 255; i++){
                sum += i;
                Console.WriteLine($"Num: {i}, Sum: {sum}");
            }
        }

        // 4 - Iterating Through an Array
        // Write a function that would iterate through each item of the given integer array and print each value to the console
        public static void LoopArray(int[] arr){
            for (var i = 0; i < arr.Length; i++){
                Console.WriteLine(arr[i]);
            }
        }

        // 5 - Find Max
        // Write a function that takes an integer array and prints and returns the maximum value in the array.
        //Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]),
        // or even a mix of positive numbers, negative numbers and zero.
        public static void FindMax(int[] arr){
            var max = arr[0];
            for (var i = 0; i < arr.Length; i++){
                if (arr[i] > max){
                    max = arr[i];
                }
            }
            Console.WriteLine($"max = {max}");
        }

        // 6 - Get Average
        // Write a function that takes an integer array and prints the AVERAGE of the values in the array.
        public static void GetAvg(int[] arr){
            var sum = 0;
            for (var i = 0; i < arr.Length; i++){
                sum += arr[i];
            }
            var avg = sum / arr.Length;
            Console.WriteLine(avg);
        }

        // 7 - Array with Odd Numbers
        // Write a function that creates, and then returns, an array that contains all the odd numbers between 1 to 255.
        public static int[] OddArray()
        {

            int size = (255/2) + 1;

            int[] odds = new int[size];

            int i = 0;
            for(int num = 1; num <= 255; num++)
            {
                if(num % 2 != 0)
                {
                    odds[i] = num;
                    i++;
                }
            }
            return odds;
        }
        // 8 - Greater Than Y
        // Return all values of a given array that are greater than the given int

        public static void GreaterThanY(int[] arr, int y){
            for (var i = 0; i < arr.Length; i++){
                    if (arr[i] > y){
                        Console.WriteLine(arr[i]);
                }
            }
        }

        // 9 - Square The Values
        // Squares all values in a given array

        public static void SquareArray(int[] arr){
            for (var i = 0; i < arr.Length; i++){
                arr[i] = arr[i] * arr[i];
                Console.WriteLine(arr[i]);
            }
        }

        // 10 - Eliminate Negative Numbers
        public static void EliminateNegatives(int[] arr){
            for (var i = 0; i < arr.Length; i++){
                if (arr[i] < 0){
                    arr[i] = 0;
                }
                Console.WriteLine(arr[i]);
            }
        }

        // 11 - Min / Max / Average
        public static void MinMaxAvg(int[] arr){
            var min = arr[0];
            var max = arr[0];
            var sum = arr[0];

            for (var i = 1; i < arr.Length; i++){
                if (arr[i] < min){
                    min = arr[i];
                }
                if (arr[i] > max) {
                    max = arr[i];
                }
                sum += arr[i];
            }
            var avg = sum / arr.Length;
            Console.WriteLine($"Min: {min}, Max: {max}, Avg: {avg}");
        }

        // 12 - Shift Values by 1 Towards the front
        public static void ShiftFront(int[] arr){
            for (var i = 0; i < arr.Length; i++){
                if (arr[i] != arr[arr.Length - 1]){
                    arr[i] = arr[i + 1];
                }
                else if (arr[i] == arr[arr.Length - 1]){
                    arr[i] = 0;
                }
                Console.WriteLine(arr[i]);
            }
        }

        // 13 - Number To String
        // public static object[] NumToStr(int[] arr){
        //     for (var i = 0; i < arr.Length; i++){
        //         if (arr[i] < 0){
        //             int num = arr[i];
        //             string numString = num.ToString("Dojo");
        //             arr[i] = numString;
        //         }
        //         Console.WriteLine(arr[i]);
        //     }
        // }
    }
}

