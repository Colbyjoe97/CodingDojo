using System;
using WeddingPlanner.Models;

namespace WeddingPlanner.Models
{
    public class Link
    {
        public int LinkId {get;set;}
        public int UserId {get;set;}
        public int WeddingId {get;set;}
        public Wedding wedding {get;set;}
        public User attendee {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}