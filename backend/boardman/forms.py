from django.forms import ModelForm
from .models import Type
from django import forms


class TypeForm(ModelForm):
    class Meta:
        model = Type
        fields = ['title', 'image', 'category_id', 'status']

    labels = {
        'title': '',
        'image': '',
        'category': '',
        'status': False
    }
    
    widgets = {
        'title': forms.TextInput
    }