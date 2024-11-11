from django.urls import path
from boardman import views

urlpatterns = [
    path('login/', views.admin_login, name='admin-login'),
    path('dashboard/', views.admin_dashboard, name='admin-dashboard')
]