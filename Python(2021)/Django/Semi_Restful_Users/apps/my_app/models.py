# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import re
from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def basic_validator(self, postData):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        errors = {}
        if len(postData['first_name']) < 2:
            errors['fname'] = "First Name must be at least 3 characters long"
        if len(postData['last_name']) < 2:
            errors['lname'] = "Last Name must be at least 3 characters long"
        if len(postData['email']) < 1:
            errors['email'] = "Email is required"
        elif not EMAIL_REGEX.match(postData['email']):
            errors['emailPattern'] = "Email is not valid"
        
        return errors

class User(models.Model):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email=models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
