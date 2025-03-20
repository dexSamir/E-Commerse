using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.DAL;
public class StoreContext(DbContextOptions opt) : DbContext(opt)
{
    public DbSet<Product> Products {get; set;}
}