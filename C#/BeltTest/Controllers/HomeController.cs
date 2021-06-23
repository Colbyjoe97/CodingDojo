using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BeltTest.Models;
using BeltTest.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
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
        private User GetUserFromDB()
        {
            return dbContext.Users.FirstOrDefault( u => u.UserId == HttpContext.Session.GetInt32("UserId"));
        }
        [HttpGet("")]
        public IActionResult LoginPage()
        {
            List<User> allUsers = dbContext.Users
                .ToList();
            return View("Index");
        }
        [HttpPost("Login")]
        public IActionResult Login(Login user, int UserId)
        {
            if(ModelState.IsValid)
            {
                var userInDb = dbContext.Users.FirstOrDefault(u => u.Email == user.Email);
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
                if(dbContext.Users.Any(u => u.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email already in use!");
                    return View("RegisterPage");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                dbContext.Users.Add(newUser);
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
            User userInDb = GetUserFromDB();
            if(userInDb == null)
            {
                return RedirectToAction("LoginPage");
            }
            ViewBag.User = userInDb;
            List<Event> AllEvents = dbContext.Events
                .Include(e => e.Creator)
                .Include(e => e.Participators)
                .ThenInclude(r => r.Attendee)
                .OrderByDescending(c => c.CreatedAt)
                .ToList();
            return View("HomePage", AllEvents);
        }
        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("LoginPage");
        }
        public IActionResult Privacy()
        {
            return View();
        }
        [HttpGet("new/event")]
        public IActionResult NewEvent()
        {
            User userInDb = GetUserFromDB();
            if(userInDb == null)
            {
                return RedirectToAction("LoginPage");
            }
            return View();
        }
        [HttpPost("create/event")]
        public IActionResult CreateEvent(Event newEvent)
        {
            User userInDb = GetUserFromDB();
            if(userInDb != null)
            {
                if(ModelState.IsValid)
                {
                    newEvent.UserId = userInDb.UserId;
                    dbContext.Events.Add(newEvent);
                    dbContext.SaveChanges();
                    return RedirectToAction("HomePage");
                }
                return View("NewEvent");
            }
            return RedirectToAction("LoginPage");
        }
        [HttpGet("showEvent/{eventId}")]
        public IActionResult ShowEvent(int eventId)
        {
            User userInDb = GetUserFromDB();
            ViewBag.User = userInDb;
            if(userInDb == null)
            {
                return RedirectToAction("LoginPage");
            }
            Event eventToShow = dbContext.Events
                .Include(e => e.Participators)
                .ThenInclude(u => u.Attendee)
                .Include(e => e.Creator)
                .FirstOrDefault(e => e.EventId == eventId);
            return View(eventToShow);
        }
        [HttpGet("attend/{userId}/{eventId}")]
        public IActionResult Attend(int userId, int eventId)
        {
            Participate going = new Participate();
            going.UserId = userId;
            going.EventId = eventId;
            dbContext.Attendees.Add(going);
            dbContext.SaveChanges();
            return RedirectToAction("HomePage");
        }
        [HttpGet("unattend/{userId}/{eventId}")]
        public IActionResult unAttend(int userId, int eventId)
        {
            Participate notGoing = dbContext.Attendees
                .FirstOrDefault(r => r.UserId == userId && r.EventId == eventId);
            dbContext.Remove(notGoing);
            dbContext.SaveChanges();
            return RedirectToAction("HomePage");
        }
        [HttpGet("cancel/{eventId}")]
        public IActionResult Cancel(int eventId)
        {
            Event eventToCancel = dbContext.Events
                .FirstOrDefault(e => e.EventId == eventId);
            dbContext.Events.Remove(eventToCancel);
            dbContext.SaveChanges();
            return RedirectToAction("HomePage");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
