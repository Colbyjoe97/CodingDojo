using System;

namespace Human.Models
{
    public class Samurai : Human
    {
        public Samurai(string name, int hp, int str)
        {
            Name = name;
            Health = hp;
            Strength = str;
        }
        public override int Attack(Human target)
        {
            int damage = Strength * 5;
            int targetHealth = target.Health;
            int negHealth = damage - target.Health;
            Console.WriteLine("-------");
            if (target.Health > 50)
            {
                base.Attack(target);
                Console.WriteLine($"{Name} hit {target.Name} for {damage}!");
            }
            else if (target.Health <= 50 && target.Health > 0)
            {
                damage = targetHealth;
                Console.WriteLine($"{Name} uses his special attack, and finished {target.Name} with one final blow!");
            }
            target.Health -= damage;
            if (target.Health > 0)
            {
            Console.WriteLine($"{target.Name} has {target.Health} remaining health");
            }
            else if (target.Health <= 0)
            {
                Console.WriteLine($"{target.Name} was slain! {negHealth} damage overkill!");
                Console.WriteLine("-------");
            }
            return damage;
        }
        public int Meditate()
        {
            Health = 200;
            Console.WriteLine("-------");
            Console.WriteLine($"{Name} is meditating..");
            Console.WriteLine($"{Name} now has {Health} health!");
            Console.WriteLine("-------");
            return Health;
        }
    }
}