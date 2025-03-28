using API.DAL;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;
public class ProductsController(StoreContext _context) : BaseApiController
{
    [HttpGet] //https://localhost:5001/api/products
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
        return await _context.Products.ToListAsync();
    }

    [HttpGet("{id}")] //api/products/2
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id); 

        if(product == null) return NotFound(); 

        return product;
    }
}