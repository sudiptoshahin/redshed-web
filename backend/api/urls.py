from django.urls import path, include
from api import views

urlpatterns = [
    # path("admin/", admin.site.urls),
    # path("admin/", include('boardman.urls'))
    path('api-test/', include())
]