using System;

namespace Human.Models
{
    public class Ninja : Human
    {
        public Ninja(string name, int hp, int dex)
        {
            Name = name;
            Health = hp;
            Dexterity = dex;
        }
        public override int Attack(Human target)
        {
            Random rand = new Random();
            int randNum = rand.Next(0, 100);
            int damage = 5 * Dexterity;
            int negHealth = damage - target.Health;
            Console.WriteLine("-------");
            Console.WriteLine($"{Name} hit {target.Name} for {damage}!");
            if (randNum <= 20)
            {
                damage += 10;
            }
            if (randNum <= 20)
            {
                Console.WriteLine($"{Name} hit {target.Name} for an additional 10 damage!");
                Console.WriteLine($"{target.Name} was hit for {damage} total damage!");
            }
            target.Health -= damage;
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
        public int Steal(Human target)
        {
            target.Health -= 5;
            Health += 5;
            Console.WriteLine("-------");
            Console.WriteLine($"{Name} stole 5 health from {target.Name}!");
            Console.WriteLine($"{Name} now has {Health} health!");
            Console.WriteLine("-------");
            return Health;
        }
    }
}