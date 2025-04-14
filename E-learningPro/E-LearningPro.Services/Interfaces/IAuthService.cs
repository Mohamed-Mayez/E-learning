using E_LearningPro.Services.DTOs.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Services.Interfaces
{
    public interface IAuthService
    {
        Task<bool> LoginAsync(LoginDto model);
        Task LogoutAsync();
    }
}
