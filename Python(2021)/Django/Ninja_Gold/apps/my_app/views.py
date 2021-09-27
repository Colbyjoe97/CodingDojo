from django.shortcuts import render, redirect
from random import randint
# Create your views here.
def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0

    if 'activities' not in request.session:
        request.session['activities'] = []
    else:
        request.session['activities'].reverse()
    return render(request, "index.html")


def process(request):
    if request.POST['location'] == "farm":
        int = randint(10,20)
        request.session['gold'] += int
        request.session['activities'].append({
            'gold': int,
            'location': 'Farm',
        })
    elif request.POST['location'] == "cave":
        int = randint(5,10)
        request.session['gold'] += int
        request.session['activities'].append({
            'gold': int,
            'location': 'Cave',
            'status': 'good'
        })
    elif request.POST['location'] == "house":
        int = randint(2,5)
        request.session['gold'] += int
        request.session['activities'].append({
            'gold': int,
            'location': 'House',
            'status': 'good'
        })
    elif request.POST['location'] == "casino":
        int = randint(-50, 50)
        status = ""
        if int >= 0:
            status = "good"
        else:
            status = "bad"
        request.session['gold'] += int
        request.session['activities'].append({
            'gold': int,
            'location': 'Casino',
            'status': status
        })


    return redirect("/")