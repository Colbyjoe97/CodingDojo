# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.contrib import messages
from models import *
# Create your views here.
def index(request):
    return redirect('/users')

def users(request):
    context = {
        'users': User.objects.all()
    }
    return render(request, 'index.html', context)

def show(request, id):
    user = User.objects.get(id=id)
    context = {
        'user': user
    }
    return render(request, 'show.html', context)

def new(request):
    return render(request, 'new.html')

def create(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for tag, error in errors.iteritems():
            messages.error(request, error)
        return redirect('/users/new')
    else:
        User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'])
        return redirect("/")

def edit(request, id):
    user = User.objects.get(id=id)
    context = {
        'user': user
    }
    return render(request, 'edit.html', context)

def update(request, id):
    user = User.objects.get(id=id)
    errors = User.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for tag, error in errors.iteritems():
            messages.error(request, error)
        return redirect('/users/{}/edit'.format(user.id))
    else:
        user.first_name=request.POST['first_name']
        user.last_name=request.POST['last_name']
        user.email=request.POST['email']
        user.save()
        return redirect("/users")

def destroy(request, id):
    user = User.objects.get(id=id)
    user.delete()
    return redirect('/users')