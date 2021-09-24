from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")

def buy(request):
    quantity = int(request.POST['qty'])


    if 'count' in request.session:
        request.session['count'] += int(request.POST['qty'])
    else:
        request.session['count'] = quantity

    request.session['current_order'] = float(request.POST['price']) * quantity

    if 'total' in request.session:
        request.session['total'] += float(request.session['current_order'])
    else:
        request.session['total'] = float(request.session['current_order'])
    return redirect("/receipt")

def receipt(request):
    return render(request, "receipt.html")