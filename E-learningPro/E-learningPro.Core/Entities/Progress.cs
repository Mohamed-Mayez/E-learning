using E_learningPro.Core.Enums;

namespace E_learningPro.Core.Entities
{
    public class Progress
    {
        public int ProgressID { get; set; }
        public int UserID { get; set; }
        public int CourseID { get; set; }
        public int LessonID { get; set; }
        public ProgressStatus Status { get; set; } = ProgressStatus.InProgress;
        public DateTime? LastAccessedAt { get; set; } = DateTime.UtcNow;
        public ApplicationUser User { get; set; } = null!;
        public Course Course { get; set; } = null!;
        public Lesson Lesson { get; set; } = null!;
    }
}