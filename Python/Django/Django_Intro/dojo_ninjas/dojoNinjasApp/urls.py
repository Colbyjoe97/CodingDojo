from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('addNinja', views.addNinja),
    path('addDojo', views.addDojo),
    path('delDojo', views.delDojo),
]