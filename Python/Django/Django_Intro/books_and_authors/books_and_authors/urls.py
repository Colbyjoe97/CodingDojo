from django.urls import path, include

urlpatterns = [
    path('', include("booksAndAuthorsApp.urls")),
    path('addABook', include("booksAndAuthorsApp.urls")),
    path('viewBook', include("booksAndAuthorsApp.urls")),
    path('addAuthorToBook', include("booksAndAuthorsApp.urls")),
    path('allAuthors', include("booksAndAuthorsApp.urls")),
    path('addAuthor', include("booksAndAuthorsApp.urls")),
    path('viewAuthor', include("booksAndAuthorsApp.urls")),
    path('addBookToAuthor', include("booksAndAuthorsApp.urls")),
]
