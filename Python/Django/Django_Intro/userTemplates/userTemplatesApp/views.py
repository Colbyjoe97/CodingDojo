from django.shortcuts import render, HttpResponse, redirect
from .models import User

def index(request):
    print(User.objects.all())
    context = {
        "allUsers": User.objects.all()
    }
    return render(request, "index.html", context)

def addUser(request):
    newUser = User.objects.create(first_name=request.POST['firstName'], last_name=request.POST['lastName'], email_address=request.POST['email'], age=request.POST['age'])
    return redirect('/', newUser)
