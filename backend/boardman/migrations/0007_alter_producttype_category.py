# Generated by Django 5.1.1 on 2024-12-29 19:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boardman', '0006_alter_producttype_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producttype',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_query_name='category', to='boardman.category'),
        ),
    ]
