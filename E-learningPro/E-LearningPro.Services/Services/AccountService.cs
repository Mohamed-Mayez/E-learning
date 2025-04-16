using E_learningPro.Core.Entities;
using E_LearningPro.Services.DTOs.Account;
using E_LearningPro.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Services.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public AccountService(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }
        public async Task<IdentityResult> RegisterAsync(RegisterDto model)
        {
            if(model is null)
                return new IdentityResult();
            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                FirstName = model.FirstName!,
                LastName = model.LastName!,
            };
            var result = await _userManager.CreateAsync(user, model.Password!);
            if (!result.Succeeded) 
                return result;
            await _userManager.AddToRoleAsync(user, model.Role!);
            return result;
        }
        public async Task<UserDto> GetUserAsync(int id)
        {
            var user = await _userManager.FindByIdAsync(id.ToString());
            if (user == null)
                return null;
            return new UserDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Bio = user.Bio,
                ProfilePicture = user.ProfilePicture
            };
        }

        
    }
}
