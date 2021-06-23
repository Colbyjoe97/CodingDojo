using Microsoft.EntityFrameworkCore;
using BeltReview.Models;

namespace BeltReview.Contexts
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) {}
        public DbSet<User> Users {get;set;}
        public DbSet<Party> Parties {get;set;}
        public DbSet<RSVP> RSVPS {get;set;}
    }
}