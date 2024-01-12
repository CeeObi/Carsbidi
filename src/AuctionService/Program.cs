using AuctionService.Data;
using MassTransit;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<AuctionDbContext>(options => 
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddMassTransit(x =>
            {
                x.AddEntityFrameworkOutbox<AuctionDbContext>(o =>
                {
                    o.QueryDelay = TimeSpan.FromSeconds(10);
                    o.UsePostgres();
                    o.UseBusOutbox();
                });

                x.UsingRabbitMq((context,cfg) =>
                {
                    // cfg.Host("localhost", "/", h => {
                    //     h.Username("guest");
                    //     h.Password("guest");
                    // });

                    cfg.ConfigureEndpoints(context);
                });
            });

var app = builder.Build();

app.UseAuthorization();

app.MapControllers();

try
{
    DbInitializer.InitDb(app);
}
catch (Exception e)
{    
    Console.WriteLine(e);
}

app.Run();
