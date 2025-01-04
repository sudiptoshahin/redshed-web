from django.db import models
from django.utils.timezone import now
# from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import AbstractUser
from django.utils.text import slugify


class Category(models.Model):
    title = models.CharField(max_length=50)
    # image = models.CharField(null=True, max_length=100)
    image = models.ImageField(null=True, blank=True, upload_to='uploaded_img/')
    status = models.BooleanField(default=False, null=False)
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(default=now)


class ProductType(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(null=True, blank=True, upload_to='uploaded_img/')
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        related_query_name='category',
        null=True
    )
    # Author.objects.filter(category__title='Some category')
    status = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(default=now)


class Product(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True)
    category = models.ForeignKey('Category', on_delete=models.PROTECT)
    status = models.BooleanField()
    feature_image = models.ImageField(
        null=True,
        blank=True,
        upload_to='uploaded_img/'
    )

    # ArrayField is only for postgresql
    # sub_images = ArrayField(
    #     models.CharField(max_length=100, blank=True, null=True),
    #     size=8
    # )
    # sub_images = models.CharField(max_length=100, blank=True, null=True)
    product_image_1 = models.ImageField(null=True,
                                        blank=True,
                                        upload_to='uploaded_img/')
    product_image_2 = models.ImageField(null=True,
                                        blank=True,
                                        upload_to='uploaded_img/')
    product_image_3 = models.ImageField(null=True,
                                        blank=True,
                                        upload_to='uploaded_img/')
    description = models.TextField(blank=True, null=True)
    discount_percent = models.FloatField(blank=True, null=True)
    membership_discount_percent = models.FloatField(blank=True, null=True)
    price = models.FloatField(blank=False, null=False) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Product, self).save(*args, **kwargs)


# user as customer
class Customer(AbstractUser):
    dob = models.DateTimeField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    profile_picture = models.CharField(max_length=100, blank=True, null=True)
    user_type = models.IntegerField(default=0)

