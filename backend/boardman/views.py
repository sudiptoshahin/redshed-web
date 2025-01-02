from django.shortcuts import render, redirect
# from django.contrib.auth import urls
# from django.contrib.auth import authenticate, login, logout
from boardman.forms import CategoryForm, TypeForm
from django.conf import settings
import os
# from PIL import Image
from django.http import HttpResponseRedirect
from boardman.models import Category, ProductType
from dotenv import load_dotenv
load_dotenv()


MEDIA_PATH = settings.MEDIA_ROOT


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


def admin_inventory_category_delete(request, category_id):
    print('____category_id_____', category_id)
    category = Category.objects.get(id=category_id)
    category.delete()
    return redirect('admin-inventory-category')


def admin_inventory_category_edit(request, category_id):

    # print('categoryId', categoryId)
    category = Category.objects.get(id=category_id)

    media_root_path = f"{os.getenv("IMAGE_URL_HEAD")}"
    category_instance = {
        "id": category.id,
        "title": category.title,
        "image": f"{media_root_path}{category.image}",
        "status": category.status
    }

    context_dict = {
        'category': category_instance
    }

    if request.method == "PATCH":
        # print('___PATCH____', request.POST)
        category_form = CategoryForm(request.PATCH, request.FILES)
        if category_form.is_valid():
            category_form.save(commit=True)
            return HttpResponseRedirect('/admin/dashboard/inventory/category')
        else:
            print(f"___{category_form.errors}___")

    return render(
        request,
        'boardman/inventory/category_edit.html',
        context_dict
    )


def admin_inventory_category_details(request, categoryId):
    category = Category.objects.get(id=categoryId)

    media_root_path = f"{os.getenv("IMAGE_URL_HEAD")}"
    category_instance = {
        "id": category.id,
        "title": category.title,
        "image": f"{media_root_path}{category.image}",
        "status": category.status
    }

    return render(request, 'boardman/inventory/category_details.html', {
        'category': category_instance
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

    category_form = CategoryForm()
    # uploaded_img_url = None
    if request.method == "POST":
        category_form = CategoryForm(request.POST, request.FILES)
        if category_form.is_valid():
            category_form.save(commit=True)
            return HttpResponseRedirect('/admin/dashboard/inventory/category')
        else:
            print(f"___{category_form.errors}___")  

    return render(request, 'boardman/inventory/add_category.html', {
        'form': category_form,
    })


def admin_inventory_products(request):

    return render(request, 'boardman/inventory/products.html')