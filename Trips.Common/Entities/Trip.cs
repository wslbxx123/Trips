using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Trips.Core.Entities
{
    public class Trip
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
        [BsonElement("dateStarted")]
        public DateTime DateStarted { get; set; }
        [BsonElement("dateCompleted")]
        public DateTime? DateCompleted { get; set; }
    }
}
