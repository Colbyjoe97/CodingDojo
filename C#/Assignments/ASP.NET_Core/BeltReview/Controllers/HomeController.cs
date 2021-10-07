using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BeltReview.Models;
using BeltReview.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace BeltReview.Controllers
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
            return dbContext.Users.FirstOrDefault(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
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
            List<Party> AllParties = dbContext.Parties
                .Include(p => p.Creator)
                .Include(p => p.Attendees)
                .ThenInclude(r => r.Watcher)
                .ToList();
            return View("HomePage", AllParties);
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("LoginPage");
        }

        [HttpGet("rsvp/{userId}/{partyId}")]
        public IActionResult RSVP(int userId, int partyId)
        {
            RSVP going = new RSVP();
            going.UserId = userId;
            going.PartyId = partyId;
            dbContext.RSVPS.Add(going);
            dbContext.SaveChanges();
            return RedirectToAction("HomePage");
        }

        [HttpGet("unrsvp/{userId}/{partyId}")]
        public IActionResult unRSVP(int userId, int partyId)
        {
            RSVP flake = dbContext.RSVPS
                .FirstOrDefault(r => r.UserId == userId && r.PartyId == partyId);
            dbContext.RSVPS.Remove(flake);
            dbContext.SaveChanges();
            return RedirectToAction("HomePage");
        }

        [HttpGet("new/party")]
        public IActionResult NewParty()
        {
            User userInDb = GetUserFromDB();
            if(userInDb == null)
            {
                return RedirectToAction("LoginPage");
            }
            return View();
        }

        [HttpPost("create/party")]
        public IActionResult CreateParty(Party show)
        {
            User userInDb = GetUserFromDB();
            if (userInDb != null)
            {
                if(ModelState.IsValid)
                {
                    show.UserId = userInDb.UserId;
                    dbContext.Parties.Add(show);
                    dbContext.SaveChanges();
                    return RedirectToAction("HomePage");
                }
                return View("NewParty");
            }
            return RedirectToAction("Logout");
        }

        [HttpGet("destroy/{partyId}")]
        public IActionResult DestroyParty(int partyId)
        {
            Party partyToDestroy = dbContext.Parties.FirstOrDefault(p => p.PartyId == partyId);
            dbContext.Parties.Remove(partyToDestroy);
            dbContext.SaveChanges();
            return RedirectToAction("HomePage");
        }

        [HttpGet("party/{partyId}")]
        public IActionResult ShowParty(int partyId)
        {
            User userInDb = GetUserFromDB();
            if(userInDb == null)
            {
                return RedirectToAction("LoginPage");
            }
            Party show = dbContext.Parties
                .Include(p => p.Attendees)
                .ThenInclude(r => r.Watcher)
                .Include(p => p.Creator)
                .FirstOrDefault(p => p.PartyId == partyId);
            return View(show);
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
