using System;

// Print 1 to 255
// for (int i = 1; i <= 255; i++)
// {
//     Console.WriteLine(i);
// }

// Prints all values 1-100 if divisible by either 5 or 3 (not both)
// for (int i = 1; i <= 100; i++)
// {
//     if (i % 5 == 0 && i % 3 != 0)
//     {
//         Console.WriteLine("Buzz " + i);
//     }
//     else if (i % 3 == 0 && i % 5 != 0)
//     {
//         Console.WriteLine("Fizz " + i);
//     }
//     else if (i % 3 == 0 && i % 5 == 0)
//     {
//         Console.WriteLine("FizzBuzz " + i);
//     }
// }

int i = 1;
while (i <= 100){
    if (i % 5 == 0 && i % 3 != 0)
    {
        Console.WriteLine("Buzz " + i);
    }
    else if (i % 3 == 0 && i % 5 != 0)
    {
        Console.WriteLine("Fizz " + i);
    }
    else if (i % 3 == 0 && i % 5 == 0)
    {
        Console.WriteLine("FizzBuzz " + i);
    }
    i += 1;
}


