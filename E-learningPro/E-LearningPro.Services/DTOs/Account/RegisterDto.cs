using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Services.DTOs.Account
{
    public class RegisterDto
    {
        [Required]
        public string? FirstName { get; set; }
        [Required]
        public string? LastName { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string? Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string? Password { get; set; }
        [Display(Name = "Rewrite Password")]
        [Compare("Password")]
        [DataType(DataType.Password)]
        [Required]
        public string? ConfirmPassword { get; set; }
        public string? Role { get; set; } // "Admin", "Instructor", "Learner"
   
    }
}
