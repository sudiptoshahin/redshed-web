from django import forms
from .models import ProductType, Category
# from django import forms


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['title', 'image', 'status']


class TypeForm(forms.ModelForm):
    class Meta:
        model = ProductType
        fields = ['title', 'image', 'category_id', 'status']

    # labels = {
    #     'title': 'Title',
    #     'image': 'Image',
    #     'category': 'Select category (*)',
    #     'status': 'Status'
    # }
    
    # widgets = {
    #     'title': forms.TextInput(
    #         attrs={
    #             'class': 'input-label',
    #             'placeholder': 'Enter the title'
    #         }
    #     )
    # }