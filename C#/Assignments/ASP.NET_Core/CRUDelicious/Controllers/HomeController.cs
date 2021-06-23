using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;
using Microsoft.EntityFrameworkCore;
using CRUDelicious.Contexts;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace CRUDelicious.Controllers
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
            List<Dish> AllDishes = dbContext.Dishes
                .Include(c => c.Chef)
                .ToList();
            return View(AllDishes);
        }


        [HttpGet("CreateDish")]
        public IActionResult CreateDish()
        {
            ViewBag.AllChefs = dbContext.Chefs
                .ToList();
            return View();
        }


        [HttpPost("AddDish")]
        public IActionResult AddDish(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                dbContext.Dishes.Add(newDish);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                ViewBag.AllChefs = dbContext.Chefs
                .ToList();
                return View("CreateDish");
            }
        }


        [HttpGet("view/{DishId}")]
        public IActionResult ViewDish(int dishId)
        {
            Dish dishToView = dbContext.Dishes.SingleOrDefault(dish => dish.DishId == dishId);
            ViewBag.ThisDish = dishToView;
            return View();
        }

        [HttpGet("edit/{DishId}")]
        public IActionResult Edit(int dishId)
        {
            Dish dishToEdit = dbContext.Dishes.SingleOrDefault(dish => dish.DishId == dishId);
            ViewBag.ThisDish = dishToEdit;
            return View();
        }
        [HttpPost("EditDish/{DishId}")]
        public IActionResult EditDish(int dishId, Dish newDish)
        {
            Dish dishToEdit = dbContext.Dishes.SingleOrDefault(dish => dish.DishId == dishId);
            dishToEdit.Name = newDish.Name;
            dishToEdit.Chef = newDish.Chef;
            dishToEdit.Calories = newDish.Calories;
            dishToEdit.Tastiness = newDish.Tastiness;
            dishToEdit.UpdatedAt = DateTime.Now;
            dbContext.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpGet("delete/{DishId}")]
        public IActionResult Delete(int dishId)
        {
            Dish dishToDelete = dbContext.Dishes.SingleOrDefault(dish => dish.DishId == dishId);
            dbContext.Dishes.Remove(dishToDelete);
            dbContext.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet("AddChefPage")]
        public IActionResult ChefPage()
        {
            return View();
        }

        [HttpPost("AddChef")]
        public IActionResult AddChef(Chef newChef)
        {
            if(ModelState.IsValid)
            {
                if(newChef.Birthday > DateTime.Today)
                {
                    ModelState.AddModelError("Birthday", "Birth year cannot be in the future!");
                    return View("ChefPage");
                }
                dbContext.Add(newChef);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View("ChefPage");
            }
        }
        [HttpGet("ViewChefs")]
        public IActionResult ViewChefs()
        {
            List<Chef> AllChefs = dbContext.Chefs.Include(u => u.CreatedDishes)
                .ToList();
            return View(AllChefs);
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}