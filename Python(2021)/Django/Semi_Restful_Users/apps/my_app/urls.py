from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^users$', views.users),
    url(r'^users/new', views.new, name="new_user"),
    url(r'^create', views.create),
    url(r'^users/(?P<id>\d+)$', views.show, name="users_show"),
    url(r'^users/(?P<id>\d+)/edit$', views.edit, name="users_edit"),
    url(r'^users/(?P<id>\d+)/update$', views.update),
    url(r'^users/(?P<id>\d+)/destroy$', views.destroy, name='users_destroy')
]