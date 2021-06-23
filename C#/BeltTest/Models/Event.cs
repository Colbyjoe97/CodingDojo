using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BeltTest.Validations;

namespace BeltTest.Models
{
    public class Event
    {
        [Key]
        public int EventId {get;set;}
        [Required(ErrorMessage =  "Name is required")]
        [Display(Name="Name:")]
        public string Name {get;set;}
        [Required(ErrorMessage =  "Start Date/Time is required")]
        [Display(Name="Start Date/Time:")]
        [PastDate]
        public DateTime Start {get;set;}
        [Required(ErrorMessage =  "Duration is required")]
        [Display(Name="Duration:")]
        [Range(0,9999)]
        public int Duration {get;set;}
        [Required(ErrorMessage="Duration Type is required")]
        [Display(Name="Duration Type: ")]
        public string DurationType {get;set;}
        [Required(ErrorMessage="Description Type is required")]
        [Display(Name="Description: ")]
        public string Description {get;set;}
        public int UserId {get;set;}
        public User Creator {get;set;}
        public List<Participate> Participators {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}