using System.ComponentModel.DataAnnotations;

namespace E_learningPro.Core.Entities
{
    public class Review : BaseEntity
    {
        public int ReviewID { get; set; }
        public int UserID { get; set; }
        public int CourseID { get; set; }
        [Range(1, 5)]
        public int Rating { get; set; }
        public string? Comment { get; set; }
        public ApplicationUser User { get; set; } = null!;
        public Course Course { get; set; } = null!;
    }
}