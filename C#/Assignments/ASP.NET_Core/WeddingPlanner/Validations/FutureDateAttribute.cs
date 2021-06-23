using System;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Validations
{
    public class FutureDateAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            DateTime now = DateTime.Now;
            DateTime nompare = (DateTime)value;
            if(DateTime.Now > (DateTime)value)
            {
                return new ValidationResult("Weddings must be scheduled for a future date");
            }
            return ValidationResult.Success;
        }
    }
}