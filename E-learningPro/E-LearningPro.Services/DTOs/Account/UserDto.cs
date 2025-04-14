using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Services.DTOs.Account
{
    public class UserDto
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Bio { get; set; }
        public string? ProfilePicture { get; set; }
    }
}
