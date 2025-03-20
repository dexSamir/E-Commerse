using API.DAL;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt => 
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("SQLite"));
}); 
var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapControllers();

app.Run();
