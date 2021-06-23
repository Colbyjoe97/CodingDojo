using Microsoft.AspNetCore.Mvc;
namespace Portfolio_1.Controllers
{
    public class ProjectsController : Controller
    {
        [HttpGet]
        [Route("projects")]
        public ViewResult projects()
        {
            return View("Projects");
        }
    }
}