using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeltTest.Models
{
    public class User
    {
        [Key]
        public int UserId {get;set;}
        [Required(ErrorMessage="First Name is required")]
        [MinLength(2)]
        [Display(Name="First Name: ")]
        public string FirstName {get;set;}
        [Required(ErrorMessage="Last Name is required")]
        [MinLength(2)]
        [Display(Name="Last Name: ")]
        public string LastName {get;set;}
        [Required(ErrorMessage="Email is required")]
        [EmailAddress]
        [Display(Name="Email: ")]
        public string Email {get;set;}
        [Required(ErrorMessage="Password is required")]
        [MinLength(8)]
        [DataType(DataType.Password)]
        [Display(Name="Password: ")]
        [RegularExpression("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", ErrorMessage = "Password must contain at least 1 UpperCase character, 1 LowerCase character, and 1 Number")]
        public string Password {get;set;}
        List<Event> MyEvents {get;set;}
        List<Participate> Participants {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        [NotMapped]
        [Compare("Password")]
        [Display(Name="Confirm Password: ")]
        [DataType(DataType.Password)]
        public string Compare {get;set;}
    }
}