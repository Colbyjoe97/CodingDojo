# This is the app folder!
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('blog', views.root),
    path('blog/new', views.new),
    path('blog/create', views.create),
    path('blog/<int:num>', views.show),
    path('blog/<int:num>/edit', views.edit),
    path('blog/<int:num>/delete', views.destroy),
    path('blog/json', views.json)
]