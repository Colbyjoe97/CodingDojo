from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string
# Create your views here.
def index(request):
    if 'attempt' in request.session:
        request.session['attempt'] += 1
    else:
        request.session['attempt'] = 1
    context = {
        "string": get_random_string(length=14)

    }
    return render(request, "index.html", context)

def generate(request):
    return redirect('/')

def reset(request):
    request.session.flush()
    return redirect('/')