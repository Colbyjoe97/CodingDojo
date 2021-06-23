using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models
{
    public class Associations
    {
        [Key]
        public int AssociationId {get;set;}
        public int ProductId {get;set;}
        public int CategoryId {get;set;}
        public Categories category {get;set;}
        public Products product {get;set;}
    }
}