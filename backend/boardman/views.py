from django.shortcuts import render
# from django.contrib.auth import urls
# from django.contrib.auth import authenticate, login, logout
from boardman.forms import TypeForm, CategoryForm
from django.conf import settings
import os
from PIL import Image
import io
from django.http import HttpResponseRedirect
from boardman.models import Category, Type


category_context_dict = {
    "table_headers": ['Categories', 'Status', 'Created At', 'Actions'],
    "data": [
        {
            "id": "#001",
            "title": "Shirts",
            "status": True,
            "created_at": "12-11-2024"
        },
        {
            "id": "#002",
            "title": "Belts",
            "status": False,
            "created_at": "12-11-2024"
        },
        {
            "id": "#003",
            "title": "Shoe",
            "status": False,
            "created_at": "13-11-2024"
        },
        {
            "id": "#004",
            "title": "Shader",
            "status": False,
            "created_at": "13-11-2024"
        }
    ]
}

type_context_dict = {
        "table_headers": ['Types', 'Status', 'Created At', 'Actions'],
        "data": [
            {
                "id": "#001",
                "title": "Formal", 
                "status": True,
                "created_at": "12-11-2024"
            },
            {
                "id": "#002",
                "title": "Casual", 
                "status": False,
                "created_at": "12-11-2024"
            },
            {
                "id": "#003",
                "title": "Sports", 
                "status": False,
                "created_at": "13-11-2024"
            }
        ]
    }


def admin_login(request):
    return render(request, 'boardman/login.html')


def admin_dashboard(request):
    return render(request, 'boardman/overview.html')


def admin_inventory_type(request):

    # data that needs to pass in context dictionary
    return render(request, 'boardman/inventory/type.html', {
        'data': type_context_dict["data"],
        'headers': type_context_dict["table_headers"]
    })


def admin_inventory_category(request):
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
    typeForm = TypeForm()
    if request.method == "POST":
        print('title:', request.POST.get('title'))

    return render(request, 'boardman/inventory/add_type.html', {
        "form": typeForm,
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
                category = categoryForm.save(commit=False)
                # category.save()
                return HttpResponseRedirect('admin/dashboard/inventory/category')

    return render(request, 'boardman/inventory/add_category.html', {
        'form': categoryForm,
        # 'uploaded_img_url': uploaded_img_url
    })
