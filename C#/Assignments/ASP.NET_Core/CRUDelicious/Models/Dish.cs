using System;
using System.ComponentModel.DataAnnotations;

namespace CRUDelicious.Models
{
    public class Dish
    {
        [Key]
        public int DishId {get;set;}
        [Display(Name="Chef: ")]
        public int ChefId {get;set;}
        [Required]
        [Display(Name="Dish Name: ")]
        public string Name {get;set;}
        public Chef Chef {get;set;}
        [Required]
        [Range(0,5000)]
        [Display(Name="Calories: ")]
        public int Calories {get;set;}
        [Required]
        [Range(0,5)]
        [Display(Name="Tastiness: ")]
        public int Tastiness {get;set;}
        [Required]
        public string Description {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}