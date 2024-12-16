from django.urls import path
from boardman import views

urlpatterns = [
    path('login/', views.admin_login, name='admin-login'),
    path('dashboard/', views.admin_dashboard, name='admin-dashboard-overview'),

    # inventory-category-add
    path(
        'dashboard/inventory/category/add',
        views.admin_inventory_category_add,
        name='admin-inventory-category-add'
    ),

    # inventory-add
    path(
        'dashboard/inventory/type/add',
        views.admin_inventory_type_add,
        name='admin-inventory-type-add'
    ),

    # inventory-type
    path(
        'dashboard/inventory/type',
        views.admin_inventory_type,
        name='admin-inventory-type'
    ),
    # inventory-category
    path(
        'dashboard/inventory/category',
        views.admin_inventory_category,
        name='admin-inventory-category'
    ),
]
