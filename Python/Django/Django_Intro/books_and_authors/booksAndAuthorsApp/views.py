from django.shortcuts import render, HttpResponse, redirect
from .models import Books, Authors

def index(request):
    context = {
        'everyBook': Books.objects.all(),
        'everyAuthor': Authors.objects.all(),
    }
    return render(request, "index.html", context)

def addABook(request):
    newBook = Books.objects.create(title=request.POST["btitle"], desc=request.POST["bdesc"])
    return redirect('/', newBook)

def viewBook(request, bookId):
    this_book = Books.objects.get(id=bookId)
    bookAuthors = this_book.authors.all()
    context = {
        'this_book': Books.objects.get(id=bookId),
        'bookAuthors' : Authors.objects.all()
    }
    return render(request, "book.html", context)

def addAuthorToBook(request, bookId):
    this_book = Books.objects.get(id=bookId)
    this_author = Authors.objects.get(id=request.POST['selectedAuthor'])
    this_book.authors.add(this_author)
    return redirect(f'/viewBook/{bookId}')

def allAuthors(request):
    context = {
        'everyBook': Books.objects.all(),
        'everyAuthor': Authors.objects.all(),
    }
    return render(request, "addAuthor.html", context)

def addAuthor(request):
    newAuthor = Authors.objects.create(first_name=request.POST["fname"], last_name=request.POST["lname"], notes=request.POST["authnotes"])
    return redirect('/allAuthors', newAuthor)

def viewAuthor(request, authorId):
    this_author = Authors.objects.get(id=authorId)
    authorBooks = this_author.allBooks.all()
    context = {
        'this_author': Authors.objects.get(id=authorId),
        'authorBooks' : Books.objects.all()
    }
    return render(request, "viewAuthor.html", context)

def addBookToAuthor(request, authorId):
    this_author = Authors.objects.get(id=authorId)
    this_book = Books.objects.get(id=request.POST['selectedbook'])
    this_author.allBooks.add(this_book)
    return redirect(f'/viewAuthor/{authorId}')