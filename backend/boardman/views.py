from django.shortcuts import render
# from django.contrib.auth import urls
# from django.contrib.auth import authenticate, login, logout
from boardman.forms import TypeForm, CategoryForm
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

    if request.method == "POST":
        print({
            "post": request.POST,
            "files": request.FILES
        })
        type_form = TypeForm(request.POST, request.FILES)
        # print(type_form.cleaned_data)
        if type_form.is_valid():
            type_form.save()
            return HttpResponseRedirect('/admin/dashboard/inventory/type')
        else:
            print(f"errors==> {type_form.errors}")
    else:
        type_form = TypeForm()
    return render(request, 'boardman/inventory/add_type.html', {
        "form": type_form,
        'categories': categories
    })

# def admin_inventory_type_add(request):
#     categories = []
#     raw_categories = Category.objects.all()
#     for category in raw_categories:
#         categories.append({'id': category.id, 'title': category.title})

#     typeForm = TypeForm()
#     if request.method == "POST":
#         type_obj = {
#             "title": request.POST.get("title"),
#             "image": request.FILES.get('image'),
#             "category_id:": request.POST.get("category"),
#             "status": request.POST.get("status")
#         }
#         type_form_obj = TypeForm(type_obj)
        
#         if type_form_obj.is_valid():
#             print(type_form_obj)
#             # type_form_obj.save()
#             return HttpResponseRedirect('/admin/dashboard/inventory/type')
#         # else:
#         #     print(f'____________{typeForm.errors}___________')

#     return render(request, 'boardman/inventory/add_type.html', {
#         "form": typeForm,
#         'categories': categories
#     })


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
    # if request.method == "POST" and request.FILES.get('image'):
    #     uploaded_file = request.FILES.get('image')

    #     uploaded_path = os.path.join(settings.MEDIA_ROOT, uploaded_file.name)
    #     with open(uploaded_file, 'wb') as file:
    #         for chunk in uploaded_file.chunks():
    #             file.write(chunk)
    #     # Process the image (resize or change aspect ratio if needed)
    #     image_file = Image.open(uploaded_path)
    #     desired_size = (233, 270)
    #     image_file = image_file.resize(desired_size)
        
    #     processed_img_name = f"processed_{uploaded_file.name}"
    #     processed_image_path = os.path.join(
    #         settings.MEDIA_ROOT,
    #         processed_img_name
    #     )
    #     image_file.save(processed_image_path)
    #     uploaded_img_url = os.path.join(
    #         settings.MEDIA_URL, processed_img_name
    #     )

    if request.method == "POST":
        category_dict = {
            'title': request.POST.get('title'),
            'image': request.FILES.get('image'),
            'status': request.POST.get('status')
        }

        if validate_data(category_dict):
            # if category_dict['status'] == 'deactive':
            #     category_dict["status"] = False
            # if category_dict['status'] == 'active':
            #     category_dict["status"] = True
            
            # uploaded_file = category_dict['image']
            # image = Image.open(uploaded_file)

            # desired_size = (233, 270)
            # image = image.resize(desired_size)

            # processed_img_io = io.BytesIO()
            # image.save(processed_img_io, format=image.format)
            # processed_img_io.seek(0)

            # categoryForm = CategoryForm(
            #     title=category_dict["title"],
            #     image=category_dict["image"],
            #     status=category_dict["status"],
            # )
            categoryForm = CategoryForm(request.POST)
            if categoryForm.is_valid():
                # category = categoryForm.save(commit=False)
                categoryForm.save()
                return HttpResponseRedirect('/admin/dashboard/inventory/category')

    return render(request, 'boardman/inventory/add_category.html', {
        'form': categoryForm,
        # 'uploaded_img_url': uploaded_img_url
    })
