# This is the app folder!
from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
def index(request):
    return redirect("/blog")

def root(request):
    return HttpResponse("Placeholder to later display a list of all blogs")

def new(request):
    return HttpResponse("Placeholder to display a new form to create a new blog")

def create(request):
    return redirect("/")

def show(request, num):
    return HttpResponse(f"Placeholder to display blog number {num}")

def edit(request, num):
    return HttpResponse(f"Placeholder to edit blog {num}")

def destroy(request, num):
    return redirect("/blog")

def json(request):
    return JsonResponse({"Kroos": "German Midfielder", "Worked?": True})