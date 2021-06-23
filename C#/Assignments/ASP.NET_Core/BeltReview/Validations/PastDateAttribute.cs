using System;
using System.ComponentModel.DataAnnotations;

namespace BeltReview.Validations
{
    public class PastDateAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if(DateTime.Now > (DateTime)value)
            {
                return new ValidationResult("You cannot schedule a party in the past");
            }
            return ValidationResult.Success;
        }
    }
}