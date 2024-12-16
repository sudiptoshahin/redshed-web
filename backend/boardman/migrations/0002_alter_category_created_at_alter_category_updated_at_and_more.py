# Generated by Django 5.1.1 on 2024-12-15 15:02

import datetime
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boardman', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='category',
            name='updated_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='type',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 12, 15, 15, 2, 25, 156692)),
        ),
        migrations.AlterField(
            model_name='type',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 12, 15, 15, 2, 25, 156713)),
        ),
    ]
