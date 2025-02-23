from django.db import models
from django.utils.timezone import now
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.text import slugify
from typing import Optional


class Category(models.Model):
    title: str = models.CharField(max_length=50)
    image: Optional[models.ImageField] = models.ImageField(null=True, blank=True, upload_to='uploaded_img/')
    status: bool = models.BooleanField(default=False)
    created_at: models.DateTimeField = models.DateTimeField(auto_now_add=True)
    updated_at: models.DateTimeField = models.DateTimeField(auto_now=True)


class ProductType(models.Model):
    title: str = models.CharField(max_length=50)
    image: Optional[models.ImageField] = models.ImageField(null=True, blank=True, upload_to='uploaded_img/')
    category: Optional[Category] = models.ForeignKey(
        Category, on_delete=models.SET_NULL, related_query_name='category', null=True
    )
    status: bool = models.BooleanField(default=False)
    created_at: models.DateTimeField = models.DateTimeField(default=now)
    updated_at: models.DateTimeField = models.DateTimeField(default=now)


class Product(models.Model):
    title: str = models.CharField(max_length=100)
    slug: Optional[str] = models.SlugField(max_length=200, unique=True, blank=True, null=True)
    category: Category = models.ForeignKey('Category', on_delete=models.PROTECT)
    status: bool = models.BooleanField()
    feature_image: Optional[models.ImageField] = models.ImageField(null=True, blank=True, upload_to='uploaded_img/')
    product_image_1: Optional[models.ImageField] = models.ImageField(null=True, blank=True, upload_to='uploaded_img/')
    product_image_2: Optional[models.ImageField] = models.ImageField(null=True, blank=True, upload_to='uploaded_img/')
    product_image_3: Optional[models.ImageField] = models.ImageField(null=True, blank=True, upload_to='uploaded_img/')
    description: Optional[str] = models.TextField(blank=True, null=True)
    discount_percent: Optional[float] = models.FloatField(blank=True, null=True)
    membership_discount_percent: Optional[float] = models.FloatField(blank=True, null=True)
    price: float = models.FloatField()
    created_at: models.DateTimeField = models.DateTimeField(auto_now_add=True)
    updated_at: models.DateTimeField = models.DateTimeField(auto_now=True)

    def save(self, *args: tuple, **kwargs: dict) -> None:
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        BOARDMAN = "BOARDMAN", "Boardman"
        CUSTOMER = "CUSTOMER", "Customer"

    role: str = models.CharField(max_length=50, choices=Role.choices)
    groups: models.ManyToManyField = models.ManyToManyField(Group, related_name="boardman_users", blank=True)
    user_permissions: models.ManyToManyField = models.ManyToManyField(
        Permission, related_name='boardman_user_permissions', blank=True
    )

    def save(self, *args: tuple, **kwargs: dict) -> None:
        if not self.pk and not self.role:
            self.role = self.Role.ADMIN
        super().save(*args, **kwargs)


class Admin(User):
    base_role: str = User.Role.ADMIN

    class Meta:
        proxy: bool = True

    def save(self, *args: tuple, **kwargs: dict) -> None:
        self.role = self.base_role
        self.is_superuser = True
        self.is_staff = True
        super().save(*args, **kwargs)


class Boardman(User):
    base_role: str = User.Role.BOARDMAN

    class Meta:
        proxy: bool = True

    def save(self, *args: tuple, **kwargs: dict) -> None:
        self.role = self.base_role
        self.is_superuser = False
        self.is_staff = True
        super().save(*args, **kwargs)


class Customer(User):
    base_role: str = User.Role.CUSTOMER

    class Meta:
        proxy: bool = True

    def save(self, *args: tuple, **kwargs: dict) -> None:
        self.role = self.base_role
        self.is_superuser = False
        self.is_staff = False
        super().save(*args, **kwargs)
