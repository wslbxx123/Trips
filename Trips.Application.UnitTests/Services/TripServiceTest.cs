using Moq;
using NUnit.Framework;
using System;
using Trips.Application.Services;
using Trips.Core.Entities;
using Trips.Infrastructure.Repository;

namespace Trips.Application.UnitTests.Services
{
    public class TripServiceTest
    {
        private Mock<ITripRepository> _mockTripRepository;
        private TripService _tripService;

        [SetUp]
        public void Setup()
        {
            // Arrange
            _mockTripRepository = new Mock<ITripRepository>();
            _tripService = new TripService(_mockTripRepository.Object);
        }

        [Test]
        public void Test_GetAllTrips_Success()
        {
            // Act
            _tripService.GetAllTrips();

            // Assert
            _mockTripRepository.Verify(m => m.GetAllTrips(), Times.Once());
        }

        [Test]
        public void Test_GetTripById_Success()
        {
            // Arrange
            var tripId = "123";

            // Act
            _tripService.GetTripById(tripId);

            // Assert
            _mockTripRepository.Verify(m => m.GetTripById(tripId), Times.Once());
        }

        [Test]
        public void Test_UpdateTrip_Success()
        {
            // Arrange
            var tripId = "123";
            var trip = new Trip
            {
                Name = "TripName",
                Description = "TripDescription",
                DateCompleted = new DateTime(2020, 1, 2),
                DateStarted = new DateTime(2019, 1, 2)
            };

            // Act
            _tripService.UpdateTrip(tripId, trip);

            // Assert
            _mockTripRepository.Verify(m => m.UpdateTrip(tripId, trip), Times.Once());
        }

        [Test]
        public void Test_DeleteTrip_Success()
        {
            // Arrange
            var tripId = "123";

            // Act
            _tripService.DeleteTrip(tripId);

            // Assert
            _mockTripRepository.Verify(m => m.DeleteTrip(tripId), Times.Once());
        }

        [Test]
        public void Test_AddTrip_Success()
        {
            // Arrange
            var trip = new Trip
            {
                Name = "TripName",
                Description = "TripDescription",
                DateCompleted = new DateTime(2020, 1, 2),
                DateStarted = new DateTime(2019, 1, 2)
            };

            // Act
            _tripService.AddTrip(trip);

            // Assert
            _mockTripRepository.Verify(m => m.AddTrip(trip), Times.Once());
        }
    }
}