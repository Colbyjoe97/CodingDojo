from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('success', views.success),
    path('logout', views.logout),
    path('login', views.login),
    path('item/create', views.createItemPage),
    path('addItem', views.addItem),
    path('view/<int:itemId>', views.viewItem),
    path('addFav/<int:itemId>', views.addFav),
    path('removeFav/<int:itemId>', views.removeFav),
    path('delete/<int:itemId>', views.delete),
]
