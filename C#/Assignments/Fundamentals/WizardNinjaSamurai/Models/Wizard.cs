using System;

namespace Human.Models
{
    public class Wizard : Human
    {
        public Wizard(string name, int hp, int intel)
        {
            Name = "Gandolf";
            Health = hp;
            Intelligence = intel;
        }
        public override int Attack(Human target)
        {
            int damage = Intelligence * 5;
            int negHealth = damage - target.Health;
            Health += damage;
            target.Health -= damage;
            if (Health > 200)
            {
                Health = 200;
            }
            Console.WriteLine("-------");
            Console.WriteLine($"{Name} hit {target.Name} for {damage}!");
            Console.WriteLine($"{Name} was healed for {damage} health and now has {Health} remaining health!");
            if (target.Health >= 0)
            {
            Console.WriteLine($"{target.Name} has {target.Health} remaining health");
            }
            else if (target.Health < 0)
            {
                Console.WriteLine($"{target.Name} was slain! {negHealth} damage overkill!");
                Console.WriteLine("-------");
            }
            return damage;
        }
        public int Heal()
        {
            Console.WriteLine("-------");
            Console.WriteLine($"{Name} uses heal!");
            Health += 10;
            Console.WriteLine($"{Name} now has {Health} health!");
            Console.WriteLine("-------");
            return Health;
        }
    }
}