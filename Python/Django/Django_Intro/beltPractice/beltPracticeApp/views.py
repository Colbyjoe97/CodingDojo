from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *

def index(request):
    return render(request, "login.html")

def register(request):
    validatorErrors = User.objects.registrationValidator(request.POST)
    if len(validatorErrors) > 0:
        for key, value in validatorErrors.items():
            messages.error(request, value)
        return redirect("/")
    newUser = User.objects.create(first_name=request.POST['fname'], last_name=request.POST['lname'], username=request.POST['uname'], birthday=request.POST['bday'], password=request.POST['pass'])
    return redirect('/')

def success(request):
    if 'loggedInId' not in request.session:
        messages.error(request, "You must be logged in first")
        return redirect("/")
    context = {
        'loggedInUser': User.objects.get(id=request.session['loggedInId']),
        'allMovies': Movie.objects.all(),
        'favMovies': Movie.objects.filter(favorited_by=User.objects.get(id=request.session['loggedInId'])),
        'otherMovies': Movie.objects.exclude(favorited_by=User.objects.get(id=request.session['loggedInId'])),
    }
    return render(request, "success.html", context)

def login(request):
    validatorErrors = User.objects.loginValidator(request.POST)
    if len(validatorErrors) > 0:
        for key, value in validatorErrors.items():
            messages.error(request, value)
        return redirect("/")
    else:
        matchingUsername = User.objects.filter(username=request.POST['username'])
        request.session['loggedInId'] = matchingUsername[0].id
    return redirect("/success")

def create(request):
    return render(request, "create.html")

def add(request):
    validatorErrors = Movie.objects.createMovieValidator(request.POST)
    if len(validatorErrors) > 0:
        for key, value in validatorErrors.items():
            messages.error(request, value)
        return redirect("/create")
    else:
        newMovie = Movie.objects.create(title=request.POST['title'], duration=request.POST['dur'], release_date=request.POST['rd'], description=request.POST['desc'], created_by=User.objects.get(id=request.session['loggedInId']))
    return redirect("/success")

def addFav(request, movieId):
    Movie.objects.get(id=movieId).favorited_by.add(User.objects.get(id=request.session['loggedInId']))
    return redirect("/success")

def removeFav(request, movieId):
    Movie.objects.get(id=movieId).favorited_by.remove(User.objects.get(id=request.session['loggedInId']))
    return redirect("/success")

def viewMovie(request, movieId):
    context = {
        'this_movie': Movie.objects.get(id=movieId)
    }
    return render(request, "viewMovie.html", context)

def deleteMovie(request, movieId):
    movieToDelete = Movie.objects.get(id=movieId)
    movieToDelete.delete()
    return redirect("/success")

def editMovie(request, movieId):
    context = {
        'this_movie': Movie.objects.get(id=movieId)
    }
    return render(request, "editMovie.html", context)


def updateMovie(request, movieId):
    errors = Movie.objects.createMovieValidator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f"/editMovie/{movieId}")
    else:
        movieToEdit = Movie.objects.get(id=movieId)
        movieToEdit.title = request.POST['title']
        movieToEdit.duration = request.POST['dur']
        movieToEdit.release_date = request.POST['rd']
        movieToEdit.description = request.POST['desc']
        movieToEdit.save()
    return redirect("/success")

def logout(request):
    request.session.clear()
    return redirect("/")