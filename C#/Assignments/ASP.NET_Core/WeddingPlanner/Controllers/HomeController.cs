using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using WeddingPlanner.Contexts;
using WeddingPlanner.Models;
using Microsoft.EntityFrameworkCore;

namespace BeltTest.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, MyContext context)
        {
            dbContext = context;
            _logger = logger;
        }
        [HttpGet("")]
        public IActionResult LoginPage()
        {
            List<User> allUsers = dbContext.users
                .ToList();
            return View("Index");
        }
        [HttpPost("Login")]
        public IActionResult Login(Login user, int UserId)
        {
            if(ModelState.IsValid)
            {
                var userInDb = dbContext.users.FirstOrDefault(u => u.Email == user.Email);
                if(userInDb == null)
                {
                    ModelState.AddModelError("Email", "Email not yet registered.");
                    return View("Index");
                }
                var hasher = new PasswordHasher<Login>();
                var result = hasher.VerifyHashedPassword(user, userInDb.Password, user.Password);
                if(result == 0)
                {
                    ModelState.AddModelError("Password", "Password is incorrect");
                    return View("Index");
                }
                int? loggedUser = HttpContext.Session.GetInt32("UserId");
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("HomePage");
            }
            else
            {
                return View("Index");
            }
        }
        [HttpGet("RegisterPage")]
        public IActionResult RegisterPage()
        {
            return View("RegisterPage");
        }
        [HttpPost("Register")]
        public IActionResult Register(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(dbContext.users.Any(u => u.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email already in use!");
                    return View("RegisterPage");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                dbContext.users.Add(newUser);
                dbContext.SaveChanges();
                return RedirectToAction("LoginPage");
            }

            else
            {
                return View("RegisterPage");
            }
        }
        [HttpGet("/homepage")]
        public IActionResult HomePage(int UserId, User user)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("LoginPage");
            }
            User userToCompare = dbContext.users
                .Include(u => u.userLinks)
                .ThenInclude(l => l.wedding)
                .SingleOrDefault(p => p.UserId == UserId);
            ViewBag.Compare = userToCompare;
            ViewBag.allWeddings = dbContext.weddings.ToList();
            ViewBag.LoggedId = loggedUser;
            ViewBag.AllUsers = dbContext.users.ToList();
            return View("HomePage", userToCompare);
        }
        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("LoginPage");
        }
        [HttpGet("createWedding")]
        public IActionResult CreateWedding()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            ViewBag.LoggedId = loggedUser;
            return View();
        }
        [HttpPost("AddWedding")]
        public IActionResult AddWedding(Wedding newWedding, int UserId)
        {
            if(ModelState.IsValid)
            {
                dbContext.weddings.Add(newWedding);
                newWedding.UserId = UserId;
                dbContext.SaveChanges();
                return RedirectToAction("HomePage");
            }
            return View("CreateWedding");
        }
        [HttpGet("View/{WeddingId}")]
        public IActionResult ViewWedding(int WeddingId)
        {
            Wedding wedToView = dbContext.weddings
                .Include(l => l.weddingLinks)
                .ThenInclude(a => a.attendee)
                .SingleOrDefault(p => p.WeddingId == WeddingId);
            ViewBag.ThisWedding = wedToView;
            return View(wedToView);
        }
        [HttpGet("rsvp/{WeddingId}")]
        public IActionResult RSVP(Link newLink, int WeddingId, int UserId)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            int? thisWedding = HttpContext.Session.GetInt32("WeddingId");
            dbContext.links.Add(newLink);
            newLink.UserId = (int)loggedUser;
            newLink.WeddingId = WeddingId;
            dbContext.SaveChanges();
            return RedirectToAction("HomePage");
        }
        [HttpGet("delete/{WeddingId}")]
        public IActionResult Delete(int WeddingId)
        {
            Wedding wedToDelete = dbContext.weddings
                .SingleOrDefault(p => p.WeddingId == WeddingId);
            dbContext.Remove(wedToDelete);
            dbContext.SaveChanges();
            return RedirectToAction("HomePage");
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
    }
}
