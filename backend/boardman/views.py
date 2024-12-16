from django.shortcuts import render
# from django.contrib.auth import urls
# from django.contrib.auth import authenticate, login, logout
from boardman.forms import TypeForm, CategoryForm

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

    typeForm = TypeForm()
    if request.method == "POST":
        print('title:', request.POST.get('title'))

    return render(request, 'boardman/inventory/add_type.html', {
        "form": typeForm
    })


def admin_inventory_category_add(request):

    categoryForm = CategoryForm()

    if request.method == "POST":
        print('title', request.POST.get('title'))

    return render(request, 'boardman/inventory/add_category.html', {
        'form': categoryForm
    })
