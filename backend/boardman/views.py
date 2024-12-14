from django.shortcuts import render
# from django.contrib.auth import urls
# from django.contrib.auth import authenticate, login, logout


def admin_login(request):
    return render(request, 'boardman/login.html')


def admin_dashboard(request):
    return render(request, 'boardman/overview.html')


def admin_inventory_type(request):
    return render(request, 'boardman/inventory/type.html')


def admin_inventory_category(request):
    return render(request, 'boardman/inventory/category.html')


def admin_inventory_type_add(request):
    return render(request, 'boardman/inventory/add_type.html')