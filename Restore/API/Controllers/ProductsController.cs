using API.DAL;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController(StoreContext _context) : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            return _context.Products.ToList();
        }

        [HttpGet("{id}")]
        public async ActionResult<Product> GetProduct(int id)
        {
            var product = _context.Products.Find(id); 

            if(product == null) return NotFound(); 

            return product;
        }
    }
}