using System.ComponentModel.DataAnnotations;

namespace BeltReview.Models
{
    public class RSVP
    {
        [Key]
        public int RSVPId {get;set;}
        public int UserId {get;set;}
        public int PartyId {get;set;}
        public User Watcher {get;set;}
        public Party Show {get;set;}
    }
}