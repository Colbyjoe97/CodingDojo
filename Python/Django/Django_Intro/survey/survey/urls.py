from django.urls import path, include

urlpatterns = [
    path('', include("surveyApp.urls")),
    path('results', include("surveyApp.urls")),
]
