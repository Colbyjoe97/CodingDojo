from django.shortcuts import render, HttpResponse, redirect
from random import randint

def index(request):
    if "gold" in request.session:
        request.session["gold"] += 0
        request.session["difference"] += 0
    else:
        request.session["gold"] = 0
        request.session["difference"] = 0
    return render(request, 'index.html')

def farm(request):
    rand = randint(10, 20)
    request.session["gold"] += rand
    request.session["difference"] = rand
    return redirect('/')

def cave(request):
    rand = randint(5, 10)
    request.session["gold"] += rand
    request.session["difference"] = rand
    return redirect('/')

def house(request):
    rand = randint(2, 5)
    request.session["gold"] += rand
    request.session["difference"] = rand
    return redirect('/')

def casino(request):
    rand = randint(-50, 50)
    request.session["gold"] += rand
    request.session["difference"] = rand
    return redirect('/')

def reset(request):
    request.session["gold"] = 0
    return redirect("/")