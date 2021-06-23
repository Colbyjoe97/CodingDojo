using System.ComponentModel.DataAnnotations;

namespace BeltTest.Models
{
    public class Login
    {
        [Required(ErrorMessage="Email is required")]
        [EmailAddress]
        [Display(Name="Email: ")]
        public string Email {get;set;}
        [Required(ErrorMessage="Password is required")]
        [MinLength(8)]
        [DataType(DataType.Password)]
        [Display(Name="Password: ")]
        public string Password {get;set;}
    }
}