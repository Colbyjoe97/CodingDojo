using LoginRegistration.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginRegistration.Contexts
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) {}
        public DbSet<User> Users {get;set;}
        public DbSet<Transactions> UsersTransactions {get;set;}
    }
}