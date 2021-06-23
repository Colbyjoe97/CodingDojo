using Microsoft.EntityFrameworkCore;
using BeltTest.Models;

namespace BeltTest.Contexts
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) {}
        public DbSet<User> Users {get;set;}
        public DbSet<Event> Events {get;set;}
        public DbSet<Participate> Attendees {get;set;}
    }
}