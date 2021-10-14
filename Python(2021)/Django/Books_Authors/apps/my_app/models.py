# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Author(models.Model):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email=models.CharField(max_length=255)

class Book(models.Model):
    name=models.CharField(max_length=255)
    desc=models.TextField(max_length=1000)
    author=models.ForeignKey(Author, related_name="books")