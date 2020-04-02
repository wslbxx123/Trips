using System;
using System.Collections.Generic;
using System.Text;

namespace Trips.Common.Models
{
    public interface ITripDatabaseSettings
    {
        public string TripsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
