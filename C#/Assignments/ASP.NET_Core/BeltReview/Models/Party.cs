using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BeltReview.Validations;

namespace BeltReview.Models
{
    public class Party
    {
        [Key]
        public int PartyId {get;set;}
        [Required(ErrorMessage = "Show Name is required")]
        [Display(Name="Show Name:")]
        public string ShowName {get;set;}
        [Required(ErrorMessage = "Start Date/Time is required")]
        [Display(Name="Start Date/Time:")]
        [PastDate]
        public DateTime Start {get;set;}
        [Required(ErrorMessage="Platform is required")]
        [Display(Name="Platform:")]
        public string Platform {get;set;}
        public int UserId {get;set;} // Foreign Key - One To Many
        // Party can only be created by one user
        public User Creator {get;set;} // Navigational Property - One to Many
        public List<RSVP> Attendees {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}