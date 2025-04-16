using E_LearningPro.Services.DTOs.Account;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Services.Interfaces
{
    public interface IAuthService
    {
        Task<SignInResult> LoginAsync(LoginDto model);
        Task LogoutAsync();
    }
}
