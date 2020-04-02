using System.Collections.Generic;
using Trips.Core.Entities;

namespace Trips.BLL.Services
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();
        Trip GetTripById(string tripId);
        void UpdateTrip(string tripId, Trip trip);
        void DeleteTrip(string tripId);
        void AddTrip(Trip trip);
    }
}
