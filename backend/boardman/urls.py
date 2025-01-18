from django.urls import path
from boardman import views

urlpatterns = [
    path('login/', views.admin_login, name='admin-login'),
    path('dashboard/', views.admin_dashboard, name='admin-dashboard-overview'),


    path(
        'test-vue/',
        views.test_vue,
        name='test_vue'
    ),

    # inventory-product-add
    path(
        'dashboard/inventory/product/add',
        views.admin_inventory_product_add,
        name='admin-inventory-product-add'
    ),

    # inventory-product-list
    path(
        'dashboard/inventory/product/list',
        views.admin_inventory_product_list,
        name='admin-inventory-product-list'
    ),

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

    # inventory-type-list
    path(
        'dashboard/inventory/type',
        views.admin_inventory_type_list,
        name='admin-inventory-type-list'
    ),

    # inventory-type-details
    path(
        'dashboard/inventory/type/<int:type_id>/details',
        views.admin_inventory_type_details,
        name='admin-inventory-type-details'
    ),
    
    # inventory-type-edit
    path(
        'dashboard/inventory/type/<int:type_id>/edit',
        views.admin_inventory_type_edit,
        name='admin-inventory-type-edit'
    ),
    
    # inventory-type-delete
    path(
        'dashboard/inventory/type/<int:type_id>/delete',
        views.admin_inventory_type_delete,
        name='admin-inventory-type-delete'
    ),

    # inventory-products
    path(
        'dashboard/inventory/products',
        views.admin_inventory_products,
        name='admin-inventory-products'
    ),
]
