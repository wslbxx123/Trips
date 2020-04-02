using System;

namespace Trips.Common.Models
{
    public class TripDatabaseSettings : ITripDatabaseSettings
    {
        public string TripsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
