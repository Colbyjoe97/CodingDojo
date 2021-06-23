from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('addShowPage', views.addShowPage),
    path('addShow', views.addShow),
    path('viewShow/<int:showId>', views.viewShow),
    path('editShow/<int:showId>', views.editShow),
    path('updateShow/<int:showId>', views.updateShow),
    path('deleteShow/<int:showId>', views.deleteShow),
]
