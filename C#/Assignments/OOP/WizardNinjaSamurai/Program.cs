using System;
using Human.Models;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Wizard gandolf = new Wizard("Gandolf", 200, 15);
            Ninja ninj = new Ninja("Jackie Chan", 200, 15);
            Samurai jin = new Samurai("Jin Sakai", 200, 15);
            while (ninj.Health > 0 && gandolf.Health > 0)
            {
                if (ninj.Health <= 50 && ninj.Health > 0)
                {
                    ninj.Steal(gandolf);
                }
                else if (ninj.Health > 50)
                {
                ninj.Attack(gandolf);
                }
                if (gandolf.Health <= 50 && gandolf.Health > 0)
                {
                    gandolf.Heal();
                }
                else if (gandolf.Health > 50)
                {
                    gandolf.Attack(ninj);
                }
            }
        }
    }
}
