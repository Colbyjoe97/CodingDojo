using Microsoft.AspNetCore.Mvc;
namespace Portfolio_1.Controllers
{
    public class ContactController : Controller
    {
        [HttpGet]
        [Route("contact")]
        public ViewResult contact()
        {
            return View("Contact");
        }
    }
}