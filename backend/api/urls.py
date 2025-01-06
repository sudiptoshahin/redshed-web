from django.urls import path
from api import views

urlpatterns = [

    # Product Types
    path('categories/', views.CategoryViewSet.as_view()),
    path('categories/<int:pk>/', views.CategoryDetailViewSet.as_view()),
]
