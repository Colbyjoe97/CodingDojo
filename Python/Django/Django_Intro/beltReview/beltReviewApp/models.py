from django.db import models
import re
import datetime
import bcrypt

class UserManager(models.Manager):
    def registrationValidator(self, postData):
        matchingEmails = User.objects.filter(email = postData['email'])
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        errors = {}
#######
        if len(postData['fname']) == 0:
            errors['fnameReq'] = "First name is required"
        elif len(postData['fname']) < 2:
            errors['fnmameLen'] = "First name must be at least 2 characters long"
#######
        if len(postData['lname']) == 0:
            errors['lnameReq'] = "Last name is required"
        elif len(postData['lname']) < 2:
            errors['lnmameLen'] = "Last name must be at least 2 characters long"
#######
        if len(postData['email']) == 0:
            errors['emailReq'] = "Email is required"
        elif not EMAIL_REGEX.match(postData['email']):
            errors['emailPattern'] = "Email is not valid"
        elif len(matchingEmails) != 0:
            errors['emailUsed'] = "Email already in use"
#######
        if len(postData['password']) == 0:
            errors['passReq'] = "Password is required"
        elif postData['password'] == "password":
            errors['passDeny'] = "Password cannot be password"
        elif len(postData['password'])< 8:
            errors['passLen'] = "Password must be at least 8 characters long"
        elif postData['password'] != postData['confirmPass']:
            errors['passMatch'] = "Password must match"
#######
        if len(postData['birthday']) == 0:
            errors['bdLen'] = "Birthday is required"
        elif postData['birthday'] > str(datetime.datetime.now()):
            errors['bdFuture'] = "Birth year cannot be in the future"
        return errors
#######
    def loginValidator(self, postData):
        matchingEmails = User.objects.filter(email = postData['userEmail'])
        errors = {}
#######
        if len(postData['userEmail']) == 0:
            errors['loginEmailReq'] = "Email is required"
        elif len(matchingEmails) == 0:
            errors['loginEmailPattern'] = "Email is not registered, please register first"
#######
        if len(postData['userPass']) == 0:
            errors['loginPassReq'] = "Password is required"
        elif not bcrypt.checkpw(postData['userPass'].encode(), matchingEmails[0].password.encode()):
            errors['badPass'] = "Password is incorrect"
        return errors


class ItemManager(models.Manager):
    def createItemValidator(self, postData):
        errors = {}
        if len(postData['itemName']) == 0:
            errors['itemNameReq'] = "Item name is required!"
        elif len(postData['itemName']) < 3:
            errors['itemNameReq'] = "Item name must be at least 3 characters long!"

        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    birthday = models.DateField(null=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Item(models.Model):
    name = models.CharField(max_length=255)
    added_by = models.ForeignKey(User, related_name="items_created", on_delete=models.CASCADE)
    favorited_by = models.ManyToManyField(User, related_name="items_favorited")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ItemManager()
