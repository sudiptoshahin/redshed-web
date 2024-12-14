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


# from django import forms
# from datetime import datetime


# class TypeForm(forms.Form):
#     title = forms.CharField(
#         label="Title",
#         max_length=100,
#         widget=forms.TextInput(
#             attrs={
#                 'class': 'form-control',
#             }
#         ),
#         required=True
#     )
#     status = forms.BooleanField(
#         label="Status",
#         required=True,
#         initial=False
#     )
#     created_at = forms.DateTimeField(
#         label='Created At',
#         initial=datetime.now()
#     )
