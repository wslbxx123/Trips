using System;

namespace Trips.Core.Settings
{
    public class TripDatabaseSettings : ITripDatabaseSettings
    {
        public string TripsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
