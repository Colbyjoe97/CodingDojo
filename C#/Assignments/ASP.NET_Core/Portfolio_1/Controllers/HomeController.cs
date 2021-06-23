using Microsoft.AspNetCore.Mvc;

namespace Portfolio_1.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
            return View("Index");
        }
    }
}