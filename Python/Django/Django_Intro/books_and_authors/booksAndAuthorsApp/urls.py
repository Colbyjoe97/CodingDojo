from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('addABook', views.addABook),
    path('viewBook/<int:bookId>', views.viewBook),
    path('addAuthorToBook/<int:bookId>', views.addAuthorToBook),
    path('allAuthors', views.allAuthors),
    path('addAuthor', views.addAuthor),
    path('viewAuthor/<int:authorId>', views.viewAuthor),
    path('addBookToAuthor/<int:authorId>', views.addBookToAuthor),
]