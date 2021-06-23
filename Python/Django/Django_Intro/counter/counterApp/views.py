from django.shortcuts import render, HttpResponse, redirect

def index(request):
    if 'counter' in request.session: # if counter check
        request.session['counter'] += 1
        if 'realCount' in request.session: # If counter check realcount
            request.session['realCount'] += 1
        else:
            request.session['realCount'] = 1
    else: # else counter check
        request.session['counter'] = 1
        if 'realCount' in request.session: # Else counter check realcount
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

