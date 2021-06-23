using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models
{
    public class User
    {
        [Key]
        public int UserId {get;set;}
        [Required]
        [MinLength(2)]
        [Display(Name="First Name: ")]
        public string FirstName {get;set;}
        [Required]
        [MinLength(2)]
        [Display(Name="Last Name: ")]
        public string LastName {get;set;}
        [Required]
        [EmailAddress]
        [Display(Name="Email: ")]
        public string Email {get;set;}
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        [Display(Name="Password: ")]
        public string Password {get;set;}
        public List<Link> userLinks {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        [NotMapped]
        [Compare("Password")]
        [Display(Name="Confirm Password: ")]
        [DataType(DataType.Password)]
        public string Compare {get;set;}
    }
}