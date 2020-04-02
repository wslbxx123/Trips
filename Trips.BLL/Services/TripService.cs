using MongoDB.Driver;
using System;
using System.Collections.Generic;
using Trips.Core.Entities;
using Trips.Core.Settings;

namespace Trips.BLL.Services
{
    public class TripService : ITripService
    {
        private readonly IMongoCollection<Trip> _trips;

        public TripService(ITripDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _trips = database.GetCollection<Trip>(settings.TripsCollectionName);
        }

        public List<Trip> GetAllTrips() =>
            _trips.Find(trip => true).ToList();

        public Trip GetTripById(string tripId) =>
            _trips.Find<Trip>(trip => trip.Id == tripId).FirstOrDefault();

        public void UpdateTrip(string tripId, Trip trip)
        {
            trip.Id = tripId;
            _trips.ReplaceOne(trip => trip.Id == tripId, trip);
        }

        public void DeleteTrip(string tripId) =>
            _trips.DeleteOne(trip => trip.Id == tripId);

        public void AddTrip(Trip trip)
        {
            _trips.InsertOne(trip);
        }
    }
}
