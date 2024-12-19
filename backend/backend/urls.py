# from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    # path("admin/", admin.site.urls),
    path("admin/", include('boardman.urls'))
] + static(settings.MEDIA_URL, docuement_root=settings.MEDIA_ROOT)
