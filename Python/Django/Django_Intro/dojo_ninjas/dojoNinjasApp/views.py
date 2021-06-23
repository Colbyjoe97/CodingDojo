from django.shortcuts import render, HttpResponse, redirect
from .models import Dojo, Ninja

def index(request):
    context = {
        "allDojo": Dojo.objects.all(),
        "allNinja": Ninja.objects.all(),
    }
    return render(request, "index.html", context)

def addNinja(request):
    newNinja = Ninja.objects.create(dojoId=request.POST['dojoid'], first_name=request.POST["fname"], last_name=request.POST["lname"])
    newNinja.save()
    return redirect('/', newNinja)

def addDojo(request):
    newDojo = Dojo.objects.create(name=request.POST["dojoname"], city=request.POST["dojocity"], state=request.POST["dojostate"], desc=request.POST["dojodesc"])
    newDojo.save()
    return redirect('/', newDojo)

def delDojo(request):
    deldoj = Dojo.objects.get(id=request.POST['dojo_id'])
    deldoj.delete()
    return redirect('/')