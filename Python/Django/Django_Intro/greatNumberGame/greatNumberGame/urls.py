from django.urls import path, include

urlpatterns = [
    path('', include('numberGameApp.urls')),
    path('guess', include('numberGameApp.urls')),
    path('new', include('numberGameApp.urls'))
]
