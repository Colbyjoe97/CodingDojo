using Microsoft.EntityFrameworkCore;
using ProductsAndCategories.Models;

namespace ProductsAndCategories.Contexts
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) {}
        public DbSet<Categories> categories {get;set;}
        public DbSet<Products> products {get;set;}
        public DbSet<Associations> associations {get;set;}
    }
}