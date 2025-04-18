using System.ComponentModel.DataAnnotations;

namespace E_learningPro.Core.Entities
{
    public class Category : BaseEntity
    {
        public int CategoryID { get; set; }
        [Required, MaxLength(255)]
        public string? Name { get; set; }
        public string? Description { get; set; }
        public ICollection<Course>? Courses { get; set; }
    }
}