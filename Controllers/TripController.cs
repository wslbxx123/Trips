using System.Runtime.InteropServices.ComTypes;
using System;
using Microsoft.AspNetCore.Mvc;
using Trips.Data;

namespace Trips.Controllers
{
    [Route("api/[controller]")]
    public class TripController : Controller
    {
        private ITripService _service;
        public TripController(ITripService service)
        {
            this._service = service;
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody] Trip trip)
        {
            if(trip != null)
            {
                _service.AddTrip(trip);
            }

            return Ok();
        }

        [HttpGet("[action]")]
        public IActionResult GetTrips()
        {
            try
            {
                var allTrips = _service.GetAllTrips();
                return Ok(allTrips);
            } 
            catch (Exception ex) 
            {
                return BadRequest(ex.Message);
            }         
        }

        [HttpGet("GetTrip/{id}")]
        public IActionResult GetTrip(int id)
        {
            try 
            {
                var trip = _service.GetTripById(id);

                return Ok(trip);
            } catch (Exception ex) 
            {
                return BadRequest(ex.Message);
            }
            
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody]Trip trip)
        {
            _service.UpdateTrip(id, trip);

            return Ok();
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            _service.DeleteTrip(id);

            return Ok();
        }
    }
}