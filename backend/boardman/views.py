from django.shortcuts import render
# from django.contrib.auth import urls
# from django.contrib.auth import authenticate, login, logout
from boardman.forms import CategoryForm, TypeForm
from django.conf import settings
import os
from PIL import Image
import io
from django.http import HttpResponseRedirect
from boardman.models import Category, ProductType


def admin_login(request):
    return render(request, 'boardman/login.html')


def admin_dashboard(request):
    return render(request, 'boardman/overview.html')


def admin_inventory_type(request):

    productTypes = ProductType.objects.all()
    type_context_dict = {
        "table_headers": ['Types', 'Status', 'Created At', 'Actions'],
        "data": productTypes
    }

    print(type_context_dict)

    # data that needs to pass in context dictionary
    return render(request, 'boardman/inventory/type.html', {
        'data': type_context_dict["data"],
        'headers': type_context_dict["table_headers"]
    })


def admin_inventory_category(request):

    categories = Category.objects.all()

    print(categories)

    category_context_dict = {
        "table_headers": ['Categories', 'Status', 'Created At', 'Actions'],
        "data": categories
    }

    # return render(request, 'boardman/inventory/category.html')
    return render(request, 'boardman/inventory/category.html', {
        'headers': category_context_dict['table_headers'],
        'data': category_context_dict['data'],
    })


def admin_inventory_type_add(request):
    categories = []
    raw_categories = Category.objects.all()
    for category in raw_categories:
        categories.append({'id': category.id, 'title': category.title})

    type_form = TypeForm()
    if request.method == "POST":
        type_form = TypeForm(request.POST, request.FILES)
        if type_form.is_valid():
            # title = type_form.cleaned_data["title"]
            # image = type_form.cleaned_data["image"]
            # image = request.FILES['image']
            # category_id = type_form.cleaned_data['category_id']
            # status = type_form.cleaned_data['status']

            # print({
            #     title,
            #     image,
            #     category_id,
            #     status
            # })

            type_form.save(commit=True)
            return HttpResponseRedirect('/admin/dashboard/inventory/type')
        else:
            print(f"___{type_form.errors}___")

    return render(request, 'boardman/inventory/add_type.html', {
        "form": TypeForm,
        'categories': categories
    })


def validate_data(data):
    if (isinstance(data, dict)):
        for key in data.keys():
            if len(data.get(key)) == 0:
                return False
        return True
    return False


def admin_inventory_category_add(request):

    categoryForm = CategoryForm()

    uploaded_img_url = None
    if request.method == "POST":
        category_dict = {
            'title': request.POST.get('title'),
            'image': request.FILES.get('image'),
            'status': request.POST.get('status')
        }

        if validate_data(category_dict):
            categoryForm = CategoryForm(request.POST)
            if categoryForm.is_valid():
                categoryForm.save()
                return HttpResponseRedirect('/admin/dashboard/inventory/category')

    return render(request, 'boardman/inventory/add_category.html', {
        'form': categoryForm,
    })
