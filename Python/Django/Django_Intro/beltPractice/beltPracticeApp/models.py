from django.db import models
import datetime

class UserManager(models.Manager):
    def registrationValidator(self, postData):
        matchingUsername = User.objects.filter(username=postData['uname'])
        errors = {}

        if len(postData['fname']) == 0:
            errors['fnameReq'] = "First Name is required"
        elif len(postData['fname']) < 3:
            errors['fnameLen'] = "First Name must be at least 3 characters"
        if len(postData['lname']) == 0:
            errors['lnameReq'] = "Last Name is required"
        elif len(postData['lname']) < 3:
            errors['lnameLen'] = "Last Name must be at least 3 characters"
        if len(postData['uname']) == 0:
            errors['unameReq'] = "Username is required"
        elif len(postData['uname']) < 5:
            errors['unameLen'] = "Username must be at least 5 characters"
        if len(postData['bday']) == 0:
            errors['bdayReq'] = "Birthday is required"
        elif postData['bday'] > str(datetime.datetime.now()):
            errors['futureBday'] = "Birth year cannot be in the future"
        if len(postData['pass']) == 0:
            errors['passReq'] = "Password is required"
        elif len(postData['pass']) < 8:
            errors['passReq'] = "Password must be at least 8 characters"
        elif postData['pass'] != postData['confirmPass']:
            errors['passMatch'] = "Passwords do not match"
        return errors

    def loginValidator(self, postData):
        matchingUsername = User.objects.filter(username=postData['username'])
        errors = {}

        if len(postData['username']) == 0:
            errors['usernameReq'] = "Username required"
        elif len(matchingUsername) == 0:
            errors['userMatch'] = "Username is not yet registered"
        if len(postData['password']) == 0:
            errors['passwordReq'] = "Password required"
        return errors

class MovieManager(models.Manager):
    def createMovieValidator(self, postData):
        errors = {}

        if len(postData['title']) == 0:
            errors['titleReq'] = "Title is required"
        elif len(postData['title']) < 5:
            errors['titleLen'] = "Title must be at least 5 characters long"
        if len(postData['dur']) == 0:
            errors['durReq'] = "Duration is required"
        elif int(postData['dur']) < 60:
            errors['durReq'] = "Duration cannot be under 60 minutes long"
        if len(postData['rd']) == 0:
            errors['rdReq'] = "Release Date is required"
        elif postData['rd'] > str(datetime.datetime.now()):
            errors['rdFuture'] = "Release Date cannot be in the future"
        if len(postData['desc']) == 0:
            errors['descReq'] = "Description is required"
        elif len(postData['desc']) < 10:
            errors['descLen'] = "Description must be at least 10 characters long"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    birthday = models.DateField()
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Movie(models.Model):
    title = models.CharField(max_length=255)
    duration = models.IntegerField()
    release_date = models.DateField()
    description = models.TextField(default="A good movie")
    created_by = models.ForeignKey(User, related_name="movies_created", on_delete=models.CASCADE)
    favorited_by = models.ManyToManyField(User, related_name="movies_favorited")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = MovieManager()