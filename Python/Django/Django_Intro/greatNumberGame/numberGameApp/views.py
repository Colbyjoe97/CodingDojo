from django.shortcuts import render, HttpResponse, redirect
from random import randint

def index(request):
    if "num" not in request.session:
        request.session["num"] = randint(1, 100)
    return render(request, 'index.html')

def guess(request):
    guess = int(request.POST["guess"])
    if guess == request.session["num"]:
        request.session["status"] = "Correct!"
        if "guessCount" in request.session:
            request.session["guessCount"] += 1
            if request.session["guessCount"] == 6:
                request.session["status"] = "You lose! Please try again."
        else:
            request.session['guessCount'] = 1

    elif guess > request.session["num"]:
        request.session["status"] = "Too High!"
        if "guessCount" in request.session:
            request.session["guessCount"] += 1
            if request.session["guessCount"] == 6:
                request.session["status"] = "You lose! Please try again."
        else:
            request.session['guessCount'] = 1

    else:
        request.session["status"] = "Too Low!"
        if "guessCount" in request.session:
            request.session["guessCount"] += 1
            if request.session["guessCount"] == 6:
                request.session["status"] = "You lose! Please try again."
        else:
            request.session['guessCount'] = 1
    return redirect('/')

def new(request):
    if "num" in request.session:
        del request.session["num"]
        del request.session["guessCount"]
        request.session["status"] = "Too Low!"
    return redirect('/')