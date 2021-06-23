from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import *
import bcrypt
#############
def index(request):
    return render(request, "login.html")
##############
def register(request):
    validatorErrors = User.objects.registrationValidator(request.POST)
    if len(validatorErrors) > 0:
        for key, value in validatorErrors.items():
            messages.error(request, value)
        return redirect("/")
    else:
        hashedPass = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
        newUser = User.objects.create(first_name = request.POST['fname'], last_name=request.POST['lname'], email=request.POST['email'], password=hashedPass, birthday = request.POST['birthday'])

        # Store the id of the logged in user using session
        request.session['loggedInId'] = newUser.id
    return redirect("/success")
############
def success(request):
    if 'loggedInId' not in request.session:
        messages.error(request, "You must be logged in first")
        return redirect('/')
    context = {
        'loggedInUser': User.objects.get(id=request.session['loggedInId']),
        'allItems': Item.objects.all(),
        'favItems': Item.objects.filter(favorited_by=User.objects.get(id=request.session['loggedInId'])),
        'nonFavItems': Item.objects.exclude(favorited_by=User.objects.get(id=request.session['loggedInId'])),
    }
    return render(request, "success.html", context)
#############
def logout(request):
    request.session.clear()
    return redirect("/")
#############
def login(request):
    validatorErrors = User.objects.loginValidator(request.POST)
    if len(validatorErrors) > 0:
        for key, value in validatorErrors.items():
            messages.error(request, value)
        return redirect("/")
    else:
        matchingEmails = User.objects.filter(email=request.POST['userEmail'])
        request.session['loggedInId'] = matchingEmails[0].id
    return redirect('/success')
#############
def createItemPage(request):
    return render(request, "createPage.html")
##############
def addItem(request):
    errorsFromValidator = Item.objects.createItemValidator(request.POST)
    if len(errorsFromValidator) > 0:
        for key, value in errorsFromValidator.items():
            messages.error(request, value)
            return redirect("/item/create")
    else:
        Item.objects.create(name=request.POST['itemName'], added_by = User.objects.get(id=request.session['loggedInId']))
    return redirect("/success")
###############
def viewItem(request, itemId):
    this_item = Item.objects.get(id=itemId)
    context = {
        'this_item': Item.objects.get(id=itemId)
    }
    return render(request, "viewItem.html", context)
###########
def addFav(request, itemId):
    Item.objects.get(id=itemId).favorited_by.add(User.objects.get(id=request.session['loggedInId']))
    return redirect("/success")
#################
def removeFav(request, itemId):
    Item.objects.get(id=itemId).favorited_by.remove(User.objects.get(id=request.session['loggedInId']))
    return redirect("/success")

def delete(request, itemId):
    deleteItem = Item.objects.get(id=itemId)
    deleteItem.delete()
    return redirect("/success")