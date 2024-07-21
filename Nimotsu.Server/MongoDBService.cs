namespace Nimotsu.Server;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

public class MongoDBService
{
    private readonly IMongoCollection<Nimotsu> _collection;

    public MongoDBService(IConfiguration config)
    {
        var client = new MongoClient(config.GetSection("MongoDB:ConnectionString").Value);
        var database = client.GetDatabase(config.GetSection("MongoDB:DatabaseName").Value);
        _collection = database.GetCollection<Nimotsu>("UserLuggages");
    }

    public async Task<List<Nimotsu>> GetAllAsync()
    {
        return await _collection.Find(model => true).ToListAsync();
    }

    public async Task<Nimotsu> GetByIdAsync(string id)
    {
        return await _collection.Find<Nimotsu>(model => model.Id == id).FirstOrDefaultAsync();
    }

    public async Task CreateAsync(Nimotsu model)
    {
        await _collection.InsertOneAsync(model);
    }

    public async Task UpdateAsync(string id, Nimotsu modelIn)
    {
        await _collection.ReplaceOneAsync(model => model.Id == id, modelIn);
    }

    public async Task RemoveAsync(string id)
    {
        await _collection.DeleteOneAsync(model => model.Id == id);
    }
}
