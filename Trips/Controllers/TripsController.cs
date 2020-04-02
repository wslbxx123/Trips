using System;
using Microsoft.AspNetCore.Mvc;
using Trips.Application.Services;
using Trips.Core.Entities;

namespace Trips.Controllers
{
    [Route("api/[controller]")]
    public class TripsController: Controller
    {
        private ITripService _service;
        public TripsController(ITripService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetTrips()
        {
            try {
                // throw new Exception();
                var allTrips = _service.GetAllTrips();
                return Ok(allTrips);
            } catch(Exception ex){
                return BadRequest(ex.Message);
            }
            
        }

        [HttpGet("GetTrip/{id}")]
        public IActionResult GetTripById(string id)
        {
            var trip = _service.GetTripById(id);
            return Ok(trip);
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody]Trip trip)
        {
            if(trip != null) 
            {
                _service.AddTrip(trip);
            }
            return Ok();
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(string id, [FromBody]Trip trip)
        {
            _service.UpdateTrip(id, trip);
            return Ok(trip);
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(string id)
        {
            _service.DeleteTrip(id);
            return Ok();
        }
    }
}