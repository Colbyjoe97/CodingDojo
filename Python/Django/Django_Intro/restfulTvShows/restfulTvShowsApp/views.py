from django.shortcuts import render, HttpResponse, redirect
from .models import Shows
from django.contrib import messages

def index(request):
    context = {
        'allShows' : Shows.objects.all()
    }
    return render(request, "index.html", context)

def addShowPage(request):
    return render(request, "addShowPage.html")

def addShow(request):
    errors = Shows.objects.validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/addShowPage")
    newShow = Shows.objects.create(title=request.POST["title"], network=request.POST["network"], releaseDate=request.POST["releaseDate"], description = request.POST["desc"])
    return redirect("/", newShow)

def viewShow(request, showId):
    this_show = Shows.objects.get(id=showId)
    context = {
        'this_show' : Shows.objects.get(id=showId)
    }
    return render(request, "viewShow.html", context)

def editShow(request, showId):
    context = {
        'this_show' : Shows.objects.get(id=showId)
    }
    return render(request, "editShow.html", context)

def updateShow(request, showId):
    errors = Shows.objects.validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f"/editShow/{showId}")
    this_show = Shows.objects.get(id=showId)
    this_show.title = request.POST["title"]
    this_show.network = request.POST["network"]
    this_show.releaseDate = request.POST["releaseDate"]
    this_show.description = request.POST["desc"]
    this_show.save()
    return redirect(f"/viewShow/{showId}")

def deleteShow(request, showId):
    this_show = Shows.objects.get(id=showId)
    this_show.delete()
    return redirect('/')