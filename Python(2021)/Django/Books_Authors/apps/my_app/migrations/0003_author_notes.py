# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2021-10-14 20:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0002_auto_20211014_1614'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='notes',
            field=models.TextField(default='No Notes', max_length=1000),
            preserve_default=False,
        ),
    ]
