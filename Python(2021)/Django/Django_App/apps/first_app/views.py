from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    response = "Placeholder to later display a list of all blogs"
    return HttpResponse(response)

def new(request):
    message = "Placeholder to display a form to create a new blog"
    return HttpResponse(message)

def create(request):
    return redirect("/")

def show(request, number):
    return HttpResponse(number)

def edit(request, number):
    return HttpResponse(f"Placeholder to edit blog number {number}")

def destroy(request, number):
    return redirect('/')