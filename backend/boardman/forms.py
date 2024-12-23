from django import forms
from .models import ProductType, Category
# from django import forms


TYPE_CATEGORY_CHOICES = []


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['title', 'image', 'status']


class TypeForm(forms.Form):
    title = forms.CharField(max_length=100)
    image = forms.ImageField()
    category_id = forms.IntegerField()
    status = forms.BooleanField()

    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     self.fields['category_id'].choices = [
    #         (cat.id, cat.title) for cat in Category.objects.all()
    #     ]