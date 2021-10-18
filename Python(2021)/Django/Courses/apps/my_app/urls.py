from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.courses, name="courses_create"),
    url(r'^courses/delete/(?P<id>\d+)$', views.destroy_page, name="courses_destroy_page"),
    url(r'^courses/(?P<id>\d+)/delete$', views.destroy, name="courses_destroy")
]