using E_learningPro.Core.Enums;

namespace E_learningPro.Core.Entities
{
    public class Enrollment
    {
        public int EnrollmentID { get; set; }
        public int UserID { get; set; }
        public int CourseID { get; set; }
        public PaymentStatus PaymentStatus { get; set; } = PaymentStatus.Pending;
        public DateTime? EnrolledAt { get; set; } = DateTime.UtcNow;
        public ApplicationUser User { get; set; } = null!;
        public Course Course { get; set; } = null!;
    }
}