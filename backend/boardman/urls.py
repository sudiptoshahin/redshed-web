from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.admin_login, name='admin-login'),
    path('dashboard/', views.admin_dashboard, name='admin-dashboard-overview'),

    # inventory-category-details
    path(
        'dashboard/inventory/category/<int:category_id>/delete',
        views.admin_inventory_category_delete,
        name='admin-inventory-category-delete'
    ),

    # inventory-category-details
    path(
        'dashboard/inventory/category/<int:categoryId>/details',
        views.admin_inventory_category_details,
        name='admin-inventory-category'
    ),

    # inventory-category-edit
    path(
        'dashboard/inventory/category/<int:category_id>/edit',
        views.admin_inventory_category_edit,
        name="admin-inventory-category-edit"
    ),

    # inventory-category-add
    path(
        'dashboard/inventory/category/add',
        views.admin_inventory_category_add,
        name='admin-inventory-category-add'
    ),

    # inventory-category-list
    path(
        'dashboard/inventory/category',
        views.admin_inventory_category,
        name='admin-inventory-category'
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

    # inventory-products
    path(
        'dashboard/inventory/products',
        views.admin_inventory_products,
        name='admin-inventory-products'
    ),
]
