using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using viewModelFun.Models;

namespace viewModelFun.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        [HttpGet("users")]
        public IActionResult Users()
        {
            User someUser = new User()
            {
                FirstName = "Sally",
                LastName = "Anderson"
            };
            User anotherUser = new User()
            {
                FirstName = "Jon",
                LastName = "Snow"
            };
            User thirdUser = new User()
            {
                FirstName = "Andrew",
                LastName = "Rannard"
            };

            List<User> viewModel = new List<User>()
            {
                someUser, anotherUser, thirdUser
            };
            return View(viewModel);
        }
        public IActionResult Index()
        {
            StringPage someString = new StringPage()
            {
                Str = "This here is what I call a string"
            };
            return View(someString);
        }
        [HttpGet("singleUser")]
        public IActionResult singleUser()
        {
            User someUser = new User()
            {
                FirstName = "Johnny",
                LastName = "Snow"
            };
            return View(someUser);
        }
        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int[] numArray = new int[]
            {
                1,2,3,4,5,6,7,8,9,10
            };
            return View(numArray);
        }
    }
}