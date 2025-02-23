from django.db import models
from django.utils.timezone import now
# from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.text import slugify


class Category(models.Model):
    title = models.CharField(max_length=50)
    # image = models.CharField(null=True, max_length=100)
    image = models.ImageField(null=True, blank=True, upload_to='uploaded_img/')
    status = models.BooleanField(default=False, null=False)
    # created_at = models.DateTimeField(default=now)
    # updated_at = models.DateTimeField(default=now)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


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

class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"            # admin
        BOARDMAN = "BOARDMAN", "Boardman"   # Manager: will handle site
        CUSTOMER = "CUSTOMER", "Customer"   # Customer: normal site user
    

    role = models.CharField(max_length=50, choices=Role.choices)

    groups = models.ManyToManyField(
        Group,
        related_name="boardman_users",
        blank=True
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name='boardman_user_permissions',
        blank=True
    )

    def save(self, *args, **kwargs):
        if not self.pk and not self.role:
            print('pk not found', self.pk)
            self.role = self.Role.ADMIN
        return super().save(*args, **kwargs)


class Admin(User):
    base_role: str = User.Role.ADMIN

    class Meta:
        proxy: bool = True # Use same database table as User

    def save(self, *args, **kwargs):
        self.role = self.base_role
        self.is_superuser = True
        self.is_staff = True
        super().save(*args, **kwargs)


class Boardman(User):
    base_role = User.Role.BOARDMAN

    class Meta:
        proxy = True

    def save(self, *args, **kwargs):
        self.role = self.base_role
        self.is_superuser = False
        self.is_staff = True
        super().save(*args, **kwargs)


class Customer(User):
    base_role = User.Role.CUSTOMER

    class Meta:
        proxy = True

    def save(self, *args, **kwargs):
        self.role = self.base_role
        self.is_superuser = False
        self.is_staff = False
        super().save(*args, **kwargs)