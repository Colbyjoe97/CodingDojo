from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")

def buy(request):
    qty = int(request.POST['qty'])
    request.session['qty'] = int(request.POST['qty'])
    if 'amount' in request.session:
        request.session['amount'] += qty
    else:
        request.session['amount'] = qty

    request.session['current_purchase'] = request.POST['price']
    if 'total' in request.session:
        request.session['total'] += request.POST['price']
    else:
        request.session['total'] = request.POST['price']
    return redirect("/receipt")

def receipt(request):
    return render(request, "receipt.html")