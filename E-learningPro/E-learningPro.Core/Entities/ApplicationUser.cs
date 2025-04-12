using Microsoft.AspNetCore.Identity;
using E_learningPro.Core.Enums;
using System.ComponentModel.DataAnnotations;

namespace E_learningPro.Core.Entities
{
    public class ApplicationUser : IdentityUser<int>
    {
        [Required, MaxLength(30)]
        public string FirstName { get; set; } = string.Empty;
        [Required, MaxLength(30)]
        public string LastName { get; set; } = string.Empty;
        public string? ProfilePicture { get; set; }
        public string? Bio { get; set; }
        [Required]
        public Role Role { get; set; }
        public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}