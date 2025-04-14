using E_LearningPro.Services.DTOs.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Services.Interfaces
{
    public interface IAccountService
    {
        Task<bool> RegisterAsync(RegisterDto model);
        Task<UserDto> GetUserAsync(int id);
    }
}
