using System;
using System.Collections.Generic;
using System.Text;
using Trips.Core.Entities;

namespace Trips.Infrastructure.Repository
{
    public interface ITripRepository
    {
        List<Trip> GetAllTrips();
        Trip GetTripById(string tripId);
        void UpdateTrip(string tripId, Trip trip);
        void DeleteTrip(string tripId);
        void AddTrip(Trip trip);
    }
}
