from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")


def results(request):
    if 'count' in request.session:
        request.session['count'] += 1
    else:
        request.session['count'] = 1
    request.session['name'] = request.POST['name']
    request.session['dojo'] = request.POST['dojo']
    request.session['language'] = request.POST['language']
    request.session['desc'] = request.POST['desc']
    return render(request, "results.html")