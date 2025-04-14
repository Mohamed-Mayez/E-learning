using Microsoft.AspNetCore.Mvc;

namespace E_learningPro.Controllers
{
    public class accountController : Controller
    {
        public ActionResult Login()
        {
            return View(); 
        }

        public ActionResult Signup()
        {
            return View(); 
        }
    }
}
