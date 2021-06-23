from django.urls import path, include

urlpatterns = [
    path('', include('formApp.urls')),
    path('users', include("formApp.urls")),
    path('success', include("formApp.urls"))
]
