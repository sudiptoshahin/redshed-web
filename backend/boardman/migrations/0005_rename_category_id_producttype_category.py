# Generated by Django 5.1.1 on 2024-12-23 05:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('boardman', '0004_rename_type_producttype'),
    ]

    operations = [
        migrations.RenameField(
            model_name='producttype',
            old_name='category_id',
            new_name='category',
        ),
    ]