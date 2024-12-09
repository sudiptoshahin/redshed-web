from django import forms
from datetime import datetime


class TypeForm(forms.Form):
    title = forms.CharField(
        label="Title",
        max_length=100,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control',
            }
        ),
        required=True
    )
    status = forms.BooleanField(
        label="Status",
        required=True,
        initial=False
    )
    created_at = forms.DateTimeField(
        label='Created At',
        initial=datetime.now()
    )