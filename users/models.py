# import email
# from enum import unique
from django.db import models


class Users(models.Model):
    user_name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.user_name

