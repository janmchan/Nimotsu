namespace Nimotsu.Server
{
    public class Nimotsu
    {
        internal static Nimotsu[] Defaults = [new Nimotsu {
            Name = "Kid's Luggage",
            Color = "#0000ff",
            Contents = new [] {
                new Nimotsu {
                    Name = "T-Shirt"
                },
                new Nimotsu {
                    Name = "Shorts"
                }
            }
        }, new Nimotsu {
            Name = "Lady Hand Carry",
            Color = "#0000ff",
            Contents = new [] {
                new Nimotsu {
                    Name = "Makeup"
                },
                new Nimotsu {
                    Name = "Water Bottle"
                }
            }
        }];
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; }
        public string Color { get; set; } = "#000000";
        public Nimotsu[] Contents { get; set; }
    }
}
