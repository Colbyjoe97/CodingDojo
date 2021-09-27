using System;
using System.Collections.Generic;

namespace BoxingAndUnboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> randomStuff = new List<object>();
            randomStuff.Add(7);
            randomStuff.Add(28);
            randomStuff.Add(-1);
            randomStuff.Add(true);
            randomStuff.Add("Chair");
            int sum = 0;
            for (var i = 0; i < randomStuff.Count; i++){
                Console.WriteLine(randomStuff[i]);

                if (randomStuff[i] is int){
                    var num = randomStuff[i];
                    sum += (int)num;
                }
            }
            Console.WriteLine($"Sum is {sum}");
        }
    }
}
