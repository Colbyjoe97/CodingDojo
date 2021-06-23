from django.urls import path, include

urlpatterns = [
    path('', include("dojoNinjasApp.urls")),
    path('addNinja', include("dojoNinjasApp.urls")),
    path('addDojo', include("dojoNinjasApp.urls")),
    path('delDojo', include("dojoNinjasApp.urls")),
]
