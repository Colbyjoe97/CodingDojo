from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('firstProjectApp.urls')),
    path('blog', include('firstProjectApp.urls')),
    path('blog/new', include('firstProjectApp.urls')),
    path('blog/create', include('firstProjectApp.urls')),
    path('blog/<int:num>', include('firstProjectApp.urls')),
    path('blog/<int:num>/edit', include('firstProjectApp.urls')),
    path('blog<int:num>/delete', include('firstProjectApp.urls')),
    path('blog/json', include('firstProjectApp.urls'))
]
