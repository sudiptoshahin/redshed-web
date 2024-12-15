from django.forms import ModelForm
from .models import Type
from django import forms


class TypeForm(ModelForm):
    class Meta:
        model = Type
        fields = ['title', 'image', 'category_id', 'status']

    labels = {
        'title': 'Title',
        'image': 'Image',
        'category': 'Select category (*)',
        'status': 'Status'
    }
    
    # widgets = {
    #     'title': forms.TextInput(
    #         attrs={
    #             'class': 'input-label',
    #             'placeholder': 'Enter the title'
    #         }
    #     )
    # }