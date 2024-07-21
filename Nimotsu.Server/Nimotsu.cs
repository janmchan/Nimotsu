using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Nimotsu.Server
{
    public class NimotsuDefault
    {
        internal static Nimotsu[] Defaults = [new Nimotsu {
            Name = "Kid's Luggage",
            Color = "#0000ff",
            Contents =new [] { "T Shirt", "Shorts"}
        }, new Nimotsu {
            Name = "Lady Hand Carry",
            Color = "#0000ff",
            Contents = new [] { "Water Bottle", "Makeup"}
        }, new Nimotsu {
            Name = "Business Man",
            Color = "#0000ff",
            Contents = new [] { "Laptop", "Controller"}
        }];
    }
    public class Nimotsu
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; } = "#000000";
        public string[] Contents { get; set; }
    }
}
