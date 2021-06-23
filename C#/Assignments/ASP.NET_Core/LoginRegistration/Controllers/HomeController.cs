using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LoginRegistration.Models;
using LoginRegistration.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace LoginRegistration.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;
        private readonly ILogger<HomeController> _logger;

        public HomeController(MyContext context)
        {
            dbContext = context;
        }
        [HttpGet("")]

        public IActionResult Index()
        {
            List<User> allUsers = dbContext.Users
                .ToList();
            ViewBag.Trans = dbContext.UsersTransactions;
            return View();
        }
        [HttpPost("register")]
        public IActionResult Register(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(dbContext.Users.Any(u => u.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email already in use!");
                    return View("Index");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                dbContext.Users.Add(newUser);
                dbContext.SaveChanges();
                return RedirectToAction("Success");
            }

            else
            {
                return View("Index");
            }
        }
        [HttpGet("UserProfile")]
        public IActionResult Success(int UserId, User user, int transId)
        {
            double sum = 0;
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            int? bal = HttpContext.Session.GetInt32("UserBalance");
            ViewBag.LoggedId = loggedUser;
            ViewBag.AllUsers = dbContext.Users.ToList();
            ViewBag.AllTransactions = dbContext.UsersTransactions
                .OrderByDescending(t => t.CreatedAt)
                .ToList();
            foreach(var t in dbContext.UsersTransactions)
            {
                if(t.UserId == loggedUser)
                {
                    if(sum + t.Amount >= 0)
                    {
                        sum += t.Amount;
                    }
                    else if (sum + t.Amount < 0)
                    {
                        ModelState.AddModelError("Amount", "Total balance cannot be below 0.");
                    }
                }
            }
            ViewBag.Balance = sum;
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }

            return View("Success");
        }
        [HttpPost("Login")]
        public IActionResult Login(LoginUser user, int UserId)
        {
            if(ModelState.IsValid)
            {
                var userInDb = dbContext.Users.FirstOrDefault(u => u.Email == user.Email);
                if(userInDb == null)
                {
                    ModelState.AddModelError("Email", "Email not yet registered.");
                    return View("Index");
                }
                var hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(user, userInDb.Password, user.Password);
                if(result == 0)
                {
                    ModelState.AddModelError("Password", "Password is incorrect");
                    return View("Index");
                }
                int? loggedUser = HttpContext.Session.GetInt32("UserId");
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("Success");
            }
            else
            {
                return View("Index");
            }
        }
        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [HttpPost("MakeTransaction")]
        public IActionResult Transaction(Transactions trans)
        {
            dbContext.UsersTransactions.Add(trans);
            dbContext.SaveChanges();
            return RedirectToAction("Success");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}