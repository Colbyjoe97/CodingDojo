from django.urls import path, include

urlpatterns = [
    path('', include('ninjaGoldApp.urls')),
    path('farm', include('ninjaGoldApp.urls')),
    path('cave', include('ninjaGoldApp.urls')),
    path('house', include('ninjaGoldApp.urls')),
    path('casino', include('ninjaGoldApp.urls')),
    path('reset', include('ninjaGoldApp.urls')),
]