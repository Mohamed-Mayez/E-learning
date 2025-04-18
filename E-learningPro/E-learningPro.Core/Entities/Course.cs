using E_learningPro.Core.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_learningPro.Core.Entities
{
    public class Course : BaseEntity
    {
        public int CourseID { get; set; }
        [Required, MaxLength(255)]
        public string? Title { get; set; }
        public string? Description { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; }
        public int InstructorID { get; set; }
        public int? CategoryID { get; set; }
        public string? Thumbnail { get; set; }
        public ApplicationUser? Instructor { get; set; } = null!;
        public Category? Category { get; set; }
        public ICollection<Lesson>? Lessons { get; set; }
        public ICollection<Enrollment>? Enrollments { get; set; }
        public ICollection<Review>? Reviews { get; set; }
    }
}