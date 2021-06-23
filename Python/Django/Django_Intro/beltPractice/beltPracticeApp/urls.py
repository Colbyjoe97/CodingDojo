from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('success', views.success),
    path('create', views.create),
    path('add', views.add),
    path('addFav/<int:movieId>', views.addFav),
    path('removeFav/<int:movieId>', views.removeFav),
    path('viewMovie/<int:movieId>', views.viewMovie),
    path('deleteMovie/<int:movieId>', views.deleteMovie),
    path('editMovie/<int:movieId>', views.editMovie),
    path('updateMovie/<int:movieId>', views.updateMovie),
]