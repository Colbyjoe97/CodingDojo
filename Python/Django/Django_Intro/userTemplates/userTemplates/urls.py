from django.urls import path, include

urlpatterns = [
    path('', include('userTemplatesApp.urls')),
    path('addUser', include('userTemplatesApp.urls')),
]
