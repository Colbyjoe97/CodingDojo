using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DojoDachi.Models;
using Microsoft.AspNetCore.Http;

namespace DojoDachi.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        [HttpGet("")]
        public IActionResult Index()
        {
            if(HttpContext.Session.GetString("img") == null)
            {
                HttpContext.Session.SetString("img", "https://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg");
            }
            if(HttpContext.Session.GetString("msg") == null)
            {
                HttpContext.Session.SetString("msg", "Your Dojodachi!");
            }
            if(HttpContext.Session.GetInt32("happiness") == null)
            {
                HttpContext.Session.SetInt32("happiness", 20);
            }
            if(HttpContext.Session.GetInt32("fullness") == null)
            {
                HttpContext.Session.SetInt32("fullness", 20);
            }
            if(HttpContext.Session.GetInt32("energy") == null)
            {
                HttpContext.Session.SetInt32("energy", 50);
            }
            if(HttpContext.Session.GetInt32("meals") == null)
            {
                HttpContext.Session.SetInt32("meals", 3);
            }
            int? happy = HttpContext.Session.GetInt32("happiness");
            int? fullness = HttpContext.Session.GetInt32("fullness");
            int? energy = HttpContext.Session.GetInt32("energy");
            int? meals = HttpContext.Session.GetInt32("meals");
            string message = HttpContext.Session.GetString("msg");
            string image = HttpContext.Session.GetString("img");
            if(fullness == 0 || happy == 0)
            {
                message = "You Lost!";
            }
            else if(fullness >= 100 && happy >= 100 && energy >= 100 )
            {
                message = "Congratulations! You Won!";
            }
            ViewBag.Happy = happy;
            ViewBag.Full = fullness;
            ViewBag.Energy = energy;
            ViewBag.Meals = meals;
            ViewBag.Msg = message;
            ViewBag.Img = image;
            return View();
        }
        [HttpGet("Feed")]
        public IActionResult Feed()
        {
            Random rand = new Random();
            int randNum = rand.Next(5,10);
            int badNum = rand.Next(1,100);
            int? fullness = HttpContext.Session.GetInt32("fullness");
            string message = HttpContext.Session.GetString("msg");
            int? meals = HttpContext.Session.GetInt32("meals");
            string image = HttpContext.Session.GetString("img");

            if(badNum > 25)
            {
                fullness += randNum;
                message = $"You fed your DojoDachi! +{randNum} Fullness, -1 Meals!";
                meals -= 1;
            }
            else
            {
                message = "Your Dojodachi didn't like the food! +0 Fullness, -1 Meals!";
                meals -= 1;
            }
            image = "https://blog.meccabingo.com/wp-content/uploads/2016/11/FullFace_Iphone.jpg";
            HttpContext.Session.SetInt32("fullness", (int)fullness);
            HttpContext.Session.SetInt32("meals", (int)meals);
            HttpContext.Session.SetString("msg", message);
            HttpContext.Session.SetString("img", image);
            ViewBag.Num = randNum;
            return RedirectToAction("Index");
        }
        [HttpGet("Play")]
        public IActionResult Play()
        {
            Random rand = new Random();
            int randNum = rand.Next(5,10);
            int badNum = rand.Next(1,100);
            int? happy = HttpContext.Session.GetInt32("happiness");
            int? energy = HttpContext.Session.GetInt32("energy");
            string message = HttpContext.Session.GetString("msg");
            string image = HttpContext.Session.GetString("img");
            if(badNum > 25)
            {
                happy += randNum;
                energy -= 5;
                message = $"You played with your Dojodachi! +{randNum} Happiness, -5 Energy!";
            }
            else
            {
                message = "Your Dojodachi didn't have any fun playing! +0 Happiness, -5 Energy!";
                energy -= 5;
            }
            image = "https://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg";
            HttpContext.Session.SetInt32("happiness", (int)happy);
            HttpContext.Session.SetInt32("energy", (int)energy);
            HttpContext.Session.SetString("msg", message);
            HttpContext.Session.SetString("img", image);
            return RedirectToAction("Index");
        }
        [HttpGet("Work")]
        public IActionResult Work()
        {
            Random rand = new Random();
            int randNum = rand.Next(1,3);
            int? energy = HttpContext.Session.GetInt32("energy");
            int? meals = HttpContext.Session.GetInt32("meals");
            string message = HttpContext.Session.GetString("msg");
            string image = HttpContext.Session.GetString("img");
            energy -= 5;
            meals += randNum;
            message = $"You worked hard and earned {randNum} meals! -5 Energy";
            image = "https://image.shutterstock.com/image-vector/emoticon-computer-260nw-107836655.jpg";
            HttpContext.Session.SetInt32("energy", (int)energy);
            HttpContext.Session.SetInt32("meals", (int)meals);
            HttpContext.Session.SetString("msg", message);
            HttpContext.Session.SetString("img", image);
            return RedirectToAction("Index");
        }
        [HttpGet("Sleep")]
        public IActionResult Sleep()
        {
            int? happy = HttpContext.Session.GetInt32("happiness");
            int? fullness = HttpContext.Session.GetInt32("fullness");
            int? energy = HttpContext.Session.GetInt32("energy");
            string message = HttpContext.Session.GetString("msg");
            string image = HttpContext.Session.GetString("img");
            happy -= 5;
            fullness -= 5;
            energy += 15;
            message = "You slept well and gained 15 energy! -5 Fullness, -5 Happiness";
            image = "https://www.clipartkey.com/mpngs/m/59-591835_transparent-background-sleep-emoji.png";
            HttpContext.Session.SetInt32("happiness", (int)happy);
            HttpContext.Session.SetInt32("fullness", (int)fullness);
            HttpContext.Session.SetInt32("energy", (int)energy);
            HttpContext.Session.SetString("msg", message);
            HttpContext.Session.SetString("img", image);
            return RedirectToAction("Index");
        }
        [HttpGet("Restart")]
        public IActionResult Restart()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
