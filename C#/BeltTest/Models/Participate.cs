using System.ComponentModel.DataAnnotations;

namespace BeltTest.Models
{
    public class Participate
    {
        [Key]
        public int ParticipantId {get;set;}
        public int UserId {get;set;}
        public int EventId {get;set;}
        public User Attendee {get;set;}
        public Event Gathering {get;set;}
    }
}