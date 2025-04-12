using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using E_learningPro.Core.Enums;

namespace E_learningPro.Core.Entities
{
    public class Payment
    {
        public int PaymentID { get; set; }

        public int UserID { get; set; }
        public ApplicationUser? User { get; set; }

        public int CourseID { get; set; }
        public Course? Course { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Amount { get; set; }

        [Required]
        public PaymentMethod PaymentMethod { get; set; }

        [Required]
        public string? TransactionID { get; set; }

        public PaymentStatus PaymentStatus { get; set; } = PaymentStatus.Pending;

        public DateTime PaidAt { get; set; } = DateTime.UtcNow;
    }

   


}
