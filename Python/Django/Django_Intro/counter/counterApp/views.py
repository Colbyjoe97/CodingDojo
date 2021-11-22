from django.shortcuts import render, HttpResponse, redirect

def index(request):
    if 'counter' in request.session:
        request.session['counter'] += 1
        if 'realCount' in request.session:
            request.session['realCount'] += 1
        else:
            request.session['realCount'] = 1
    else:
        request.session['counter'] = 1
        if 'realCount' in request.session:
            request.session['realCount'] += 1
        else:
            request.session['realCount'] = 1
    return render(request, 'index.html')

def session_destroy(request):
    request.session['counter'] = -1
    return redirect('/')

def two(request):
    request.session['counter'] += 1
    return redirect('/')

