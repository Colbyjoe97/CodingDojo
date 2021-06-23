using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomensLeagues = _context.Leagues
                .Where(l => l.Name.Contains("Womens"))
                .ToList();
            ViewBag.HockeySport = _context.Leagues
                .Where(l => l.Sport.Contains("Hockey"))
                .ToList();
            ViewBag.NoFootball = _context.Leagues
                .Where(l => !l.Sport.Contains("Football"))
                .ToList();
            ViewBag.Conferences = _context.Leagues
                .Where(l => l.Name.Contains("Conference"))
                .ToList();
            ViewBag.AtlanticLeague = _context.Leagues
                .Where(l => l.Name.Contains("Atlantic"))
                .ToList();

            ViewBag.DallasTeams = _context.Teams
                .Where(t => t.Location.Contains("Dallas"))
                .ToList();
            ViewBag.Raptors = _context.Teams
                .Where(t => t.TeamName.Contains("Raptors"))
                .ToList();
            ViewBag.Cities = _context.Teams
                .Where(t => t.Location.Contains("City"))
                .ToList();
            ViewBag.StartingT = _context.Teams
                .Where(t => t.TeamName.StartsWith("T"))
                .ToList();
            ViewBag.AllSorted = _context.Teams
                .Where(t => t.TeamName.Contains(""))
                .OrderBy(t => t.Location)
                .ToList();
            ViewBag.NameSorted = _context.Teams
                .Where(t => t.TeamName.Contains(""))
                .OrderByDescending(t => t.TeamName)
                .ToList();
            ViewBag.CooperOnly = _context.Players
                .Where(p => p.LastName.Contains("Cooper"))
                .ToList();
            ViewBag.JoshOnly = _context.Players
                .Where(p => p.FirstName.Contains("Joshua"))
                .ToList();
            ViewBag.CooperNoJosh = _context.Players
                .Where(p => p.LastName.Contains("Cooper") && !p.FirstName.Contains("Joshua"))
                .ToList();
            ViewBag.AlexOrWyatt = _context.Players
                .Where(p => p.FirstName.Contains("Alexander") || p.FirstName.Contains("Wyatt"))
                .OrderBy(p => p.FirstName)
                .ToList();
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            ViewBag.AtlanticTeamLeagues = _context.Teams
                .Include(t => t.CurrLeague)
                .Where(t => t.CurrLeague.Name.Contains("Atlantic Soccer Conference"))
                .ToList();
            ViewBag.PenguinsPlayers = _context.Players
                .Include(t => t.CurrentTeam)
                .Where(p => p.CurrentTeam.TeamName.Contains("Penguins"))
                .ToList();
            ViewBag.ICBC = _context.Players
                .Include(t => t.CurrentTeam.CurrLeague)
                .Where(l => l.CurrentTeam.CurrLeague.Name.Contains("International Collegiate Baseball Conference"))
                .OrderBy(p => p.CurrentTeam.TeamName)
                .ToList();
            ViewBag.ACAF = _context.Players
                .Include(l => l.CurrentTeam.CurrLeague)
                .Where(l => l.LastName.Contains("Lopez") && l.CurrentTeam.CurrLeague.Name.Contains("American Conference of Amateur Football"))
                .ToList();
            ViewBag.FootballPlayers = _context.Players
                .Include(l => l.CurrentTeam.CurrLeague)
                .Where(l =>l.CurrentTeam.CurrLeague.Sport.Contains("Football"))
                .OrderBy(l => l.CurrentTeam.TeamName)
                .ThenBy(t => t.FirstName)
                .ToList();
            ViewBag.SophiaTeams = _context.Players
                .Include(t => t.CurrentTeam)
                .Where(p => p.FirstName.Contains("Sophia"))
                .OrderBy(t => t.LastName)
                .ToList();
            ViewBag.SophiaLeagues = _context.Players
                .Include(t => t.CurrentTeam.CurrLeague)
                .Where(p => p.FirstName.Contains("Sophia"))
                .OrderBy(t => t.LastName)
                .ToList();
            ViewBag.Flores = _context.Players
                .Include(t => t.CurrentTeam)
                .Where(p => !p.CurrentTeam.TeamName.Contains("Roughriders") && p.LastName.Contains("Flores"))
                .OrderBy(t => t.CurrentTeam.TeamName)
                .ToList();
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            // Question 1:
            var SamEvans = _context.Players
                .FirstOrDefault(s => s.FirstName == "Samuel" && s.LastName == "Evans");
            ViewBag.SamTeams = _context.Teams
                // .Include(t => t.AllPlayers)
                //     .ThenInclude(a => a.PlayerId)
                .Where(s => s.AllPlayers.Any(p => p.PlayerId == SamEvans.PlayerId))
                .OrderBy(p => p.TeamName)
                .ToList();

            // Question 2:
            var manitoba = _context.Teams
                .FirstOrDefault(t => t.TeamName == "Tiger-Cats");
            ViewBag.ManiPlayers = _context.Players
                .Where(p => p.CurrentTeam == manitoba)
                .OrderBy(p => p.FirstName)
                .ToList();

            // Question 3:
            var vikings = _context.Teams
                .FirstOrDefault(t => t.TeamName == "Vikings");
            ViewBag.VikingPlayers = _context.Players
                .Where(p => p.AllTeams.Any(i => i.TeamId == vikings.TeamId) && p.TeamId != vikings.TeamId)
                .OrderBy(p => p.FirstName)
                .ThenBy(p => p.LastName)
                .ToList();

            // Question 4: (probably wrong)
            var JacobGray = _context.Players
                .FirstOrDefault(p => p.FirstName == "Jacob" && p.LastName == "Gray");
            // ViewBag.Jacobteams = _context.Players
            //     .Where(t => t.AllTeams.Any(i => i.TeamId == JacobGray.TeamId))
            ViewBag.Jacobteams = _context.Teams
                .Where(t => t.AllPlayers.Any(i => i.TeamId == JacobGray.TeamId))
                .ToList();

            // Question 5: (probably wrong)
            var Josh = _context.Players
                .FirstOrDefault(j => j.FirstName == "Joshua");
            var JoshsTeams = _context.Teams
                .FirstOrDefault(t => t.TeamId == Josh.TeamId);
            ViewBag.JoshLeagues = _context.Leagues
                .Where(l => l.Name == "Atlantic Federation of Amateur Baseball Players" && l.LeagueId == JoshsTeams.LeagueId)
                .ToList();

            // Question 6:
            var count = 0;
            var players = _context.Players;
            foreach(var p in _context.Teams)
            {
                count++;
            }
            ViewBag.BigTeams = _context.Teams
                .ToList();
            return View();
        }
    }
}