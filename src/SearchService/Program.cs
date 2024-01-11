using MongoDB.Driver;
using MongoDB.Entities;
using SearchService.Data;
// using SearchService.Model;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

/////Moved to DbInitializer class in Data folder
// await DB.InitAsync("SearchDb", MongoClientSettings.FromConnectionString(builder.Configuration.GetConnectionString("MongoDbDefaultConnection")) );
// await DB.Index<Item>()
//     .Key(x => x.Make, KeyType.Text)
//     .Key(x => x.Model, KeyType.Text)
//     .Key(x => x.Color, KeyType.Text)
//     .CreateAsync();
///////////////
try
{
    await DbInitializer.InitDb(app);
}
catch (Exception e)
{
    
    Console.WriteLine(e);
}


app.Run();
