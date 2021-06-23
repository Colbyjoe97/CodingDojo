using System;
using System.ComponentModel.DataAnnotations;

namespace BeltTest.Validations
{
    public class PastDateAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if(DateTime.Now > (DateTime)value)
            {
                return new ValidationResult("Events must be scheduled for a future date!");
            }
            return ValidationResult.Success;
        }
    }
}