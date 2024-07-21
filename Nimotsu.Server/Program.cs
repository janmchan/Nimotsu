
using Microsoft.AspNetCore.Mvc;

namespace Nimotsu.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddSingleton<MongoDBService>();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapGet("/luggage", async (HttpContext httpContext, MongoDBService mongoDBService) =>
            {
                return await mongoDBService.GetAllAsync();
            })
            .WithName("GetLuggage")
            .WithOpenApi();

            app.MapGet("/luggage/{luggageId}", async (string luggageId, HttpContext httpContext, MongoDBService mongoDBService) =>
            {
                return await mongoDBService.GetByIdAsync(luggageId);
            })
            .WithName("GetLuggageById")
            .WithOpenApi();
            app.MapPost("/luggage", async ([FromBody]Nimotsu luggage, MongoDBService mongoDBService) =>
            {
                await mongoDBService.CreateAsync(luggage);
                return Results.Created($"/luggage/{luggage.Id}", luggage);
            })
            .WithName("CreateLuggage")
            .WithOpenApi();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
