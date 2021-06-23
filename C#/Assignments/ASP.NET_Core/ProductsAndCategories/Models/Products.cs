using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models
{
    public class Products
    {
        [Key]
        public int ProductId {get;set;}
        [Display(Name="Name: ")]
        public string Name {get;set;}
        [Display(Name="Description: ")]
        public string Description {get;set;}
        [Display(Name="Price: ")]
        public double Price {get;set;}
        public List<Associations> allAssociations {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}