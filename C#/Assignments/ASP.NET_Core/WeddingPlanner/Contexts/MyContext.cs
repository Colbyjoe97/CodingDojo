using Microsoft.EntityFrameworkCore;
using WeddingPlanner.Models;

namespace WeddingPlanner.Contexts
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) {}
        public DbSet<User> users {get;set;}
        public DbSet<Wedding> weddings {get;set;}
        public DbSet<Link> links {get;set;}
    }
}