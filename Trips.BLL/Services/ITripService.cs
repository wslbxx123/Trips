using System;
using System.Collections.Generic;
using System.Text;
using Trips.Common.Models;

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
