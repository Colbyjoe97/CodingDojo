using System;
using System.ComponentModel.DataAnnotations;

namespace LoginRegistration.Models
{
    public class Transactions
    {
        [Key]
        [Required]
        public int TransactionId {get;set;}
        [Required]
        [Display(Name="Deposit/Withdraw: ")]
        public double Amount {get;set;}
        public int UserId {get;set;}
        public User AccountHolder {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
    }
}