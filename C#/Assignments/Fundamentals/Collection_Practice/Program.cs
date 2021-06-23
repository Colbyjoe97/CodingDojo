using System;
using System.Collections.Generic;

namespace Collection_Practice
{
    class Program
    {
        private static object random;

        static void Main(string[] args)
        {
        // Three Basic Arrays

            int[] firstNumArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            // Console.WriteLine(firstNumArray[3]);

            string[] firstNameArray = { "Tim", "Martin", "Nikki", "Sara" };
            // Console.WriteLine(firstNameArray[1]);

            bool[] boolArray = { true, false, true, false, true, false, true, false, true, false };
            // Console.WriteLine(boolArray);


        // List of Flavors

            List<string> flavors = new List<string>();
            flavors.Add("Vanilla");
            flavors.Add("Chocolate");
            flavors.Add("Mint");
            flavors.Add("Strawberry");
            flavors.Add("Cookies and Cream");
            // Console.WriteLine(flavors.Count);
            // Console.WriteLine(flavors[2]);
            flavors.Remove(flavors[2]);
            // Console.WriteLine(flavors.Count);

        // User Info Dictionary

            Dictionary<string, string> profile = new Dictionary<string, string>();
            for (var i = 0; i < firstNameArray.Length; i++)
            {
                var random = new Random();
                int randomnumber = random.Next(0, flavors.Count);
                profile["Name"] = firstNameArray[i];
                profile["Flavor"] = flavors[randomnumber];
                Console.WriteLine(profile["Name"] +" - " + profile["Flavor"]);
            }
        }
    }
}
