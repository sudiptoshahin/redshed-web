from django.shortcuts import render
# from django.contrib.auth import urls
# from django.contrib.auth import authenticate, login, logout


type_context_dict = {
        "table_headers": ['Typeees', 'Status', 'Created At', 'Actions'],
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
    return render(request, 'boardman/inventory/category.html')


def admin_inventory_type_add(request):
    return render(request, 'boardman/inventory/add_type.html')