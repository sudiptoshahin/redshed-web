from django import forms
from .models import ProductType, Category
# from django import forms


TYPE_CATEGORY_CHOICES = []


class CategoryForm(forms.Form):
    title = forms.CharField(max_length=100)
    image = forms.ImageField()
    status = forms.BooleanField()

    def save(self, commit=False):
        category_instance = Category(
            title=self.cleaned_data['title'],
            image=self.cleaned_data['image'],
            status=self.cleaned_data['status']
        )
        print('category_instance', category_instance)
        if commit:
            category_instance.save()
        return category_instance


class TypeForm(forms.Form):

    title = forms.CharField(max_length=100)
    image = forms.ImageField()
    category_id = forms.IntegerField()
    # category = forms.ModelChoiceField(queryset=Category.objects.all())
    status = forms.BooleanField()

    widgets = {
        title: forms.TextInput(
            attrs={
                'class': 'form-control',
                'placeholder': 'Title'
            }
        )
    }

    def get_category_instance(self, category_id):
        category_instance = Category.objects.get(id=category_id)
        return category_instance

    def save(self, commit=False):
        category_id = self.cleaned_data['category_id']

        type_instance = ProductType(
            title=self.cleaned_data['title'],
            image=self.cleaned_data['image'],
            category=self.get_category_instance(category_id),
            status=self.cleaned_data['status']
        )
        print('__from_save_method__', type_instance)

        if commit:
            type_instance.save()
        return type_instance