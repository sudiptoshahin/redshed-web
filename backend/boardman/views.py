from django.shortcuts import render, redirect
# from django.contrib.auth import urls
# from django.contrib.auth import authenticate, login, logout
from boardman.forms import CategoryForm, ProductForm, TypeForm
# from django.conf import settings
import os
# from PIL import Image
from django.http import HttpResponseRedirect
from boardman.models import Category, ProductType, Product
from django.contrib.auth.models import User
from dotenv import load_dotenv
load_dotenv()


# MEDIA_PATH = settings.MEDIA_ROOT
MEDIA_ROOT_PATH = f"{os.getenv("IMAGE_URL_HEAD")}"


def admin_login(request):
    return render(request, 'boardman/login.html')


def admin_user_register(request):
    if request.method == 'POST':
        data = request.POST.copy()

        
        
        user = User.objects.create_user()
    
    return render(request, 'boardman/admin_register.html')


def admin_dashboard(request):
    return render(request, 'boardman/overview.html')


def admin_inventory_product_add(request):
    categories = Category.objects.all()

    if request.method == "POST":
        # print('___POST___', request.POST)
        # print('___FILES___', request.FILES)
        product_data = request.POST.copy()
        
        category_instance = Category.objects.get(
            id=product_data['category_id']
        )
        product_data['category'] = product_data.pop('category_id')
        product_data['category'] = category_instance

        product_form = ProductForm(product_data, request.FILES)

        if product_form.is_valid():
            product_form.save(commit=True)
            return HttpResponseRedirect('/admin/dashboard/inventory/product/list')
        else:
            print(f"___{product_form.errors}___")

    context_dict = {
        'categories': categories
    }

    return render(request, 'boardman/inventory/product_add.html', context_dict)


def admin_inventory_product_list(request):
    products = Product.objects.all()

    context_dict = {
        "table_headers": ['Title', 'Status', 'Created At', 'Actions'],
        "data": products
    }

    return render(
        request,
        'boardman/inventory/product_list.html',
        context_dict
    )


def admin_inventory_type_details(request, type_id):
    type = ProductType.objects.get(id=type_id)
    categories = Category.objects.all()

    type_instance = {
        "id": type.id,
        "title": type.title,
        "image": f"{MEDIA_ROOT_PATH}{type.image}",
        "status": type.status
    }

    context_dict = {
        'type': type_instance,
        'categories': categories
    }

    return render(
        request,
        'boardman/inventory/type_details.html',
        context_dict
    )


def admin_inventory_type_edit(request, type_id):
    type = ProductType.objects.get(id=type_id)
    categories = Category.objects.all()

    type_instance = {
        "id": type.id,
        "title": type.title,
        "image": f"{MEDIA_ROOT_PATH}{type.image}",
        "status": type.status
    }

    type_form = None

    if request.method == "POST" and request.FILES:
        type_form = TypeForm(request.POST, request.FILES, instance=type)
        if type_form.is_valid():
            type_form.save(commit=True)
            return HttpResponseRedirect('/admin/dashboard/inventory/type')
    if request.method == "POST":
        type_form = TypeForm(request.POST, instance=type)
        if type_form.is_valid():
            type_form.save(commit=True)
            return HttpResponseRedirect('/admin/dashboard/inventory/type')

    context_dict = {
        'type': type_instance,
        'categories': categories
    }

    return render(request, 'boardman/inventory/type_edit.html', context_dict)


def admin_inventory_type_delete(request, type_id):
    print('____type_id_____', type_id)
    productType = ProductType.objects.get(id=type_id)
    productType.delete()
    return redirect('admin-inventory-type-list')


def admin_inventory_type_list(request):

    productTypes = ProductType.objects.all()
    type_context_dict = {
        "table_headers": ['Types', 'Status', 'Created At', 'Actions'],
        "data": productTypes
    }

    print(type_context_dict)

    # data that needs to pass in context dictionary
    return render(request, 'boardman/inventory/type_list.html', {
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

    category_instance = {
        "id": category.id,
        "title": category.title,
        "image": f"{MEDIA_ROOT_PATH}{category.image}",
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

    category_instance = {
        "id": category.id,
        "title": category.title,
        "image": f"{MEDIA_ROOT_PATH}{category.image}",
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