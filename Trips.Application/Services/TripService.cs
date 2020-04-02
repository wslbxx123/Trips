using System.Collections.Generic;
using Trips.Core.Entities;
using Trips.Infrastructure.Repository;

namespace Trips.Application.Services
{
    public class TripService : ITripService
    {
        private ITripRepository _tripRepository;

        public TripService(ITripRepository tripRepository)
        {
            _tripRepository = tripRepository;
        }

        public List<Trip> GetAllTrips() =>
            _tripRepository.GetAllTrips();

        public Trip GetTripById(string tripId) =>
            _tripRepository.GetTripById(tripId);

        public void UpdateTrip(string tripId, Trip trip) =>
            _tripRepository.UpdateTrip(tripId, trip);

        public void DeleteTrip(string tripId) =>
            _tripRepository.DeleteTrip(tripId);

        public void AddTrip(Trip trip) =>
            _tripRepository.AddTrip(trip);
    }
}
