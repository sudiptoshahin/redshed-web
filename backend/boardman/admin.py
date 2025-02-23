from django.contrib import admin
from boardman.models import User
from django.contrib.auth.models import Permission, Group


admin.site.register(User)
admin.site.register(Permission)