from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, "index.html")

def results(request):
    request.session['formInfo'] = request.POST
    return render(request, "results.html")