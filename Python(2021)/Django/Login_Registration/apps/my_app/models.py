# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import datetime, re, bcrypt

# Create your models here.
class UserManager(models.Manager):
    def registrationValidator(self, postData):
        matchingEmail = User.objects.filter(email=postData['email'])
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        NAME_REGEX = re.compile(r"^[a-zA-Z]*$")
        errors = {}

        if len(postData['fname']) == 0:
            errors['fname'] = "First name is required"
        elif len(postData['fname']) < 3:
            errors['fname'] = "First name must be at least 2 characters long"
        elif not NAME_REGEX.match(postData['fname']):
            errors['fname'] = "First name can only include letters"

        if len(postData['lname']) == 0:
            errors['lname'] = "Last name is required"
        elif len(postData['lname']) < 3:
            errors['lname'] = "Last name must be at least 2 characters long"
        elif not NAME_REGEX.match(postData['lname']):
            errors['lname'] = "Last name can only include letters"

        if len(postData['email']) == 0:
            errors['email'] = "Email is required"
        elif not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Email not in correct format"

        if len(postData['bday']) == 0:
            errors['bday'] = "Birthday is required"
        elif postData['bday'] > str(datetime.datetime.now()):
            errors['bday'] = "Birth year cannot be in the future"

        if len(postData['pass']) == 0:
            errors['pass'] = "Password is required"
        elif len(postData['pass']) < 8:
            errors['pass'] = "Password must be at least 8 characters"
        elif postData['pass'] != postData['confirmPass']:
            errors['pass'] = "Passwords do not match"

        return errors

    def loginValidator(self, postData):
        matchingEmail = User.objects.filter(email=postData['email'])
        errors = {}

        if len(postData['email']) == 0:
            errors['email'] = "Email is required"
        elif len(matchingEmail) == 0:
            errors['email'] = "Email is not yet registered"

        if len(postData['pass']) == 0:
            errors['pass'] = "Password is required"
        elif not bcrypt.checkpw(postData['pass'].encode(), matchingEmail[0].password.encode()):
            errors['pass'] = "Password is incorrect"

        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    birthday = models.DateField()
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()