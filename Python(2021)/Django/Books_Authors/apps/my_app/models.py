# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Book(models.Model):
    name=models.CharField(max_length=255)
    desc=models.TextField(max_length=1000)
    

class Author(models.Model):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email=models.CharField(max_length=255)
    notes=models.TextField(max_length=1000)
    books =models.ManyToManyField(Book, related_name="authors")