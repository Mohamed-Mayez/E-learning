using E_LearningPro.Services.DTOs.Account;
using E_LearningPro.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace E_learningPro.Controllers
{
    public class AccountController : Controller
    {
        private IAccountService _accountService;
        private IAuthService _authService;
        public AccountController(IAccountService accountService, IAuthService authService)
        {
            _accountService = accountService;
            _authService = authService;
        }
        [HttpGet]
        public IActionResult Login()
        {
            return View(); 
        }
        [HttpGet]
        public IActionResult Signup()
        {
            return View(); 
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginDto user)
        {
            if (ModelState.IsValid) 
            {
                var res = await _authService.LoginAsync(user);
                if (res.Succeeded) 
                {
                    return RedirectToAction("Index","Home");
                }
                ModelState.AddModelError("", "The Email or Password Invaild");
            }
            return View(user);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Signup(RegisterDto user,string role)
        {
            if(ModelState.IsValid)
            {
                user.Role = role;
                var res = await _accountService.RegisterAsync(user);
                if (res.Succeeded)
                {
                    return RedirectToAction("Login");
                }
                else
                {
                    foreach (var error in res.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }
                }

            }
            return View(user);
        }
        public async Task<IActionResult> LogOut()
        {
            await _authService.LogoutAsync();
            return RedirectToAction("Login");
        }
    }
}
