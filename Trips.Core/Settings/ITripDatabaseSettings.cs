
namespace Trips.Core.Settings
{
    public interface ITripDatabaseSettings
    {
        public string TripsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
