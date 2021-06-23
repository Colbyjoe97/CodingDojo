from django.db import models
import datetime
today = datetime.datetime.now()

class ShowManager(models.Manager):
    def validator(self, postData):
        errors = {}

        # if postData['title'] == this_show.title:
        #     errors["titledouble"] = "This show has already been added"
        if len(postData['title']) < 3:
            errors["titleLen"] = "Title must be at least 3 characters"
        if len(postData['network']) < 3:
            errors["networklen"] = "Network must be at least 3 characters"
        if len(postData['desc']) == 0:
            pass
        elif len(postData['desc']) < 10:
            errors["desclen"] = "Description must be at least 10 characters"
        if len(postData['releaseDate']) == 0:
            errors["rdLen"] = "Release Date is required"
        elif postData['releaseDate'] > str(today):
            errors["releaseDay"] = "Cannot add shows that have not been released yet"
        return errors

class Shows(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    releaseDate = models.DateField()
    description = models.TextField(default = "A TV Show")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()