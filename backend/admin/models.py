from django.db import models
from datetime import datetime


class Category(models.Model):
    title = models.CharField(required=True, max_length=50)
    image = models.CharField(null=True)
    status = models.BooleanField(default=False, null=False)
    # created_by = current user
    created_at = models.DateTimeField(default=datetime.now())
    updated_at = models.DateTimeField(default=datetime.now())


class Type(models.Model):
    title = models.CharField(required=True, max_length=50)
    image = models.CharField(null=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE,
                                    related_query_name='category')
    # Author.objects.filter(category__title='Some category')
    status = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.now())
    updated_at = models.DateTimeField(default=datetime.now())
