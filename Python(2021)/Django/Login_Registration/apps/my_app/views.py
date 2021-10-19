# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from models import *
from django.contrib import messages
import bcrypt

# Create your views here.
def index(request):
    context = {
        'errorType': request.session['errors']
    }
    return render(request, 'index.html', context)

def register(request):
    errors = User.objects.registrationValidator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        request.session['errors'] = 1
    else:
        hashedPass = bcrypt.hashpw(request.POST['pass'].encode(), bcrypt.gensalt()).decode()
        User.objects.create(first_name=request.POST['fname'],last_name=request.POST['lname'],birthday=request.POST['bday'],email=request.POST['email'],password=hashedPass)
    return redirect("/")
        

def login(request):
    errors = User.objects.loginValidator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        request.session['errors'] = 2
        return redirect('/')
    else:
        matchingEmail = User.objects.filter(email=request.POST['email'])
        request.session['current_user'] = matchingEmail[0].id
        return redirect("/success")
        

def home(request):
    context = {
        'user': User.objects.get(id=request.session['current_user'])
    }
    return render(request, 'success.html', context)