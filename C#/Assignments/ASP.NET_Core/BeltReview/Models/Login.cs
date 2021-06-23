using System.ComponentModel.DataAnnotations;

namespace BeltReview.Models
{
    public class Login
    {
        [Required]
        [EmailAddress]
        [Display(Name="Email: ")]
        public string Email {get;set;}
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        [Display(Name="Password: ")]
        public string Password {get;set;}
    }
}