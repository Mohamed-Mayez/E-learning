namespace E_learningPro.Core.Entities
{
    public class Review
    {
        public int ReviewID { get; set; }
        public int UserID { get; set; }
        public int CourseID { get; set; }
        public int Rating { get; set; }
        public string? Comment { get; set; }
        public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;
        public ApplicationUser User { get; set; } = null!;
        public Course Course { get; set; } = null!;
    }
}