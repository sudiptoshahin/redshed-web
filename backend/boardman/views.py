from django.shortcuts import render
# from django.contrib.auth import urls
# from django.contrib.auth import authenticate, login, logout


def admin_login(request):
    return render(request, 'boardman/login.html')


def admin_dashboard(request):
    return render(request, 'boardman/dashboard.html')