from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('session_destroy', views.session_destroy),
    path('twos', views.two),
]