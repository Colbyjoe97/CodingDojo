using System.ComponentModel.DataAnnotations;


namespace DojoSurvey.Models
{
    public class Survey
    {
        [Required]
        [MinLength(2)]
        public string name {get;set;}
        [Required]
        [MinLength(2)]
        public string locations {get;set;}
        [Required]
        public string languages {get;set;}
        [MinLength(20)]
        public string comment {get;set;}
    }
}