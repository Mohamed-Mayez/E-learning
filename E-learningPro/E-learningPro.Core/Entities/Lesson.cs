using E_learningPro.Core.Enums;
using System.ComponentModel.DataAnnotations;

namespace E_learningPro.Core.Entities
{
    public class Lesson
    {
        public int LessonID { get; set; }
        public int CourseID { get; set; }

        [Required, MaxLength(255)]
        public string? Title { get; set; }
        public string? ContentURL { get; set; }
        [Required]
        public LessonType Type { get; set; }
        public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; } = DateTime.UtcNow;
        public Course Course { get; set; } = null!;
    }
}