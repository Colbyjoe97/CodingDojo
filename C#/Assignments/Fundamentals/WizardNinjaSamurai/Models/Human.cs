using System;

namespace Human
{
    public class Human
        {
            public string Name;
            public int Strength;
            public int Intelligence;
            public int Dexterity;
            public int Health;
            public int health
            {
                get { return Health; }
            }
            public Human()
            {
                Name = "John";
                Strength = 3;
                Intelligence = 3;
                Dexterity = 3;
                Health = 100;
            }
            public Human(string name, int str, int intel, int dex, int hp)
            {
                Name = name;
                Strength = str;
                Intelligence = intel;
                Dexterity = dex;
                Health = hp;
            }
            public virtual int Attack(Human target)
            {
                int damage = Strength * 5;
                target.Health = target.Health - damage;
                Console.WriteLine($"{Name} hit {target.Name} for {damage}!");
                Console.WriteLine($"{target.Name} has {target.Health} remaining health");
                return Health;
            }
        }
}