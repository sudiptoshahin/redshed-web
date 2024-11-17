from django.urls import path
from boardman import views

urlpatterns = [
    path('login/', views.admin_login, name='admin-login'),
    path('dashboard/', views.admin_dashboard, name='admin-dashboard-overview'),
    path(
        'dashboard/inventory/type',
        views.admin_inventory_type,
        name='admin-inventory-type'
    ),
    path(
        'dashboard/inventory/category',
        views.admin_inventory_category,
        name='admin-inventory-category'
    ),
]
