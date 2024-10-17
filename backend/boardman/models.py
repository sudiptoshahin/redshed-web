from django.db import models
from datetime import datetime
# from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import AbstractUser


class Category(models.Model):
    title = models.CharField(max_length=50)
    image = models.CharField(null=True, max_length=100)
    status = models.BooleanField(default=False, null=False)
    # created_by = current user
    created_at = models.DateTimeField(default=datetime.now())
    updated_at = models.DateTimeField(default=datetime.now())


class Type(models.Model):
    title = models.CharField(max_length=50)
    image = models.CharField(null=True, max_length=100)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE,
                                    related_query_name='category')
    # Author.objects.filter(category__title='Some category')
    status = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.now())
    updated_at = models.DateTimeField(default=datetime.now())


class Product(models.Model):
    title = models.CharField(max_length=100)
    slug = models.CharField(max_length=200)
    category = models.ForeignKey('Category', on_delete=models.PROTECT)
    type = models.ForeignKey('Type', on_delete=models.PROTECT)
    status = models.BooleanField()
    main_images = models.CharField(max_length=100, blank=True, null=True)
    # sub_images = ArrayField(
    #     models.CharField(max_length=100, blank=True, null=True),
    #     size=8
    # )
    sub_images = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    membership_price = models.FloatField(blank=True, null=True)
    price = models.FloatField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


# user as customer
class Customer(AbstractUser):
    dob = models.DateTimeField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    profile_picture = models.CharField(max_length=100, blank=True, null=True)
    user_type = models.IntegerField(default=0)

