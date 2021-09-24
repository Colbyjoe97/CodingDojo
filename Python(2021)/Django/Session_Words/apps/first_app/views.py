from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
# Create your views here.
def index(request):
    if 'all_words' in request.session:
        if 'list'in request.session:
            request.session['list'] = request.session['all_words']
            # request.session['list'].append(request.session['word'])
        else:
            request.session['list'] = []
    else:
        request.session['all_words'] = []
    context = {
        "list": request.session['list']
    }
    return render(request, "index.html", context)


def add_word(request):
    if 'font' in request.POST:
        request.session['font'] = request.POST['font']
    else:
        request.session['font'] = "small"
    request.session['word'] = {
        'word': request.POST['word'],
        'color': request.POST['color'],
        'size': request.session['font'],
        'time': strftime("%b %d, %Y %H:%M %p", gmtime())
    }

    if 'all_words' in request.session:
        request.session['all_words'].append(request.session['word'])
    else:
        request.session['all_words'] = []
        
    return redirect('/')


def clear(request):
    request.session['all_words'] = []
    return redirect("/")