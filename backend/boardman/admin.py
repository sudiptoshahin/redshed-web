from django.contrib import admin
from django.contrib.admin import AdminSite
from boardman.models import User
from django.contrib.auth.models import Permission, Group
# from django.utils.translation import ugettext_lazy


admin.site.site_header = 'Redshed Admin'
admin.site.index_title = 'All Settings and customization'
# admin.site.site_title = 'HTML title from adminsitration'

admin.site.register(User)
admin.site.register(Permission)