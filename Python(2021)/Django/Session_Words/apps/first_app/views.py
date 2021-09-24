from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
# Create your views here.
def index(request):
    return render(request, "index.html")


def add_word(request):
    request.session['word'] = request.POST['word']
    request.session['time'] = strftime("%b %d, %Y %H:%M %p", gmtime())
    if 'big_font' in request.POST:
        if request.POST['big_font'] != "xx-large":
            request.session['font'] = "small"
        else:
            request.session['font'] = request.POST['big_font']
            
    request.session['color'] = request.POST['color']
    return redirect('/')