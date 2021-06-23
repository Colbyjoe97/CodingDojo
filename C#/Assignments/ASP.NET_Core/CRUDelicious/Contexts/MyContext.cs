using Microsoft.EntityFrameworkCore;
using CRUDelicious.Models;

namespace CRUDelicious.Contexts
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) {}
        public DbSet<Dish> Dishes {get;set;}
        public DbSet<Chef> Chefs {get;set;}
    }
}