using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProductsAndCategories.Contexts;
using ProductsAndCategories.Models;

namespace ProductsAndCategories.Controllers
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

        public IActionResult Index()
        {
            ViewBag.allProducts = dbContext.products
                .OrderByDescending(d => d.CreatedAt)
                .ToList();
            return View();
        }
        [HttpGet("Privacy")]

        public IActionResult Privacy()
        {
            return View();
        }
        [HttpPost("addProduct")]
        public IActionResult AddProduct(Products newProd)
        {
            dbContext.products.Add(newProd);
            dbContext.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet("product/{ProductId}")]
        public IActionResult ViewProduct(int productId)
        {
            ViewBag.AllCategories = dbContext.categories.ToList();
            Products prodToView = dbContext.products
                .Include(p => p.allAssociations)
                .ThenInclude(a => a.category)
                .SingleOrDefault(p => p.ProductId == productId);
            ViewBag.ThisProd = prodToView;
            return View(prodToView);
        }
        [HttpGet("Categories")]
        public IActionResult Categories()
        {
            ViewBag.allCategories = dbContext.categories
                .OrderByDescending(c => c.CreatedAt)
                .ToList();
            return View();
        }
        [HttpGet("category/{CategoryId}")]
        public IActionResult ViewCategory(int categoryId)
        {
            ViewBag.AllProducts = dbContext.products.ToList();
            Categories catToView = dbContext.categories
                .Include(p => p.allAssociations)
                .ThenInclude(a => a.product)
                .SingleOrDefault(p => p.CategoryId == categoryId);
            ViewBag.ThisCategory = catToView;
            return View(catToView);
        }
        [HttpPost("addCategory")]
        public IActionResult AddCategory(Categories newCat)
        {
            dbContext.categories.Add(newCat);
            dbContext.SaveChanges();
            return RedirectToAction("Categories");
        }
        [HttpPost("IncludeProduct")]
        public IActionResult IncludeProduct(Associations newAssoc, int CatId, int ProdId)
        {
            int? catToAdd = HttpContext.Session.GetInt32("CatId");
            ViewBag.AddCat = catToAdd;
            int? prodToAdd = HttpContext.Session.GetInt32("ProdId");
            ViewBag.AddProd = prodToAdd;
            dbContext.associations.Add(newAssoc);
            newAssoc.ProductId = ProdId;
            newAssoc.CategoryId = CatId;
            dbContext.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpPost("IncludeCategory")]
        public IActionResult IncludeCategory(Associations newAssoc, int CatId, int ProdId)
        {
            int? catToAdd = HttpContext.Session.GetInt32("CatId");
            ViewBag.AddCat = catToAdd;
            int? prodToAdd = HttpContext.Session.GetInt32("ProdId");
            ViewBag.AddProd = prodToAdd;
            dbContext.associations.Add(newAssoc);
            newAssoc.ProductId = ProdId;
            newAssoc.CategoryId = CatId;
            dbContext.SaveChanges();
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
