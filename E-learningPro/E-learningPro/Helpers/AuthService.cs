using E_learningPro.Core.Entities;
using E_LearningPro.Services.DTOs.Account;
using E_LearningPro.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace E_learningPro.Helpers
{
    public class AuthService : IAuthService
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        public AuthService(SignInManager<ApplicationUser> signInManager) 
        {
            _signInManager = signInManager;
        }
        public async Task<SignInResult> LoginAsync(LoginDto model)
        {
            if(model is null)
                return new SignInResult();
            var result = await _signInManager.PasswordSignInAsync(model.Email!, model.Password!, model.RememberMe, false);
            return result;
        }

        public async Task LogoutAsync()
        {
            await _signInManager.SignOutAsync();
        }
    }
}
