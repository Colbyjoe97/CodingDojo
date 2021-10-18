# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import *
from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    context = {
        'courses': Course.objects.all()
    }
    return render(request, 'index.html', context)

def courses(request):
    course = Course.objects.create(name=request.POST['name'], desc=request.POST['desc'])
    return redirect("/")

def destroy_page(request, id):
    context = {
        'course': Course.objects.get(id=id)
    }
    return render(request, 'destroy.html', context)

def destroy(request, id):
    course = Course.objects.get(id=id)
    course.delete()
    return redirect('/')