from django.db import models
from users.models import Users
from os import *


class Project(models.Model):
    project_name = models.CharField(max_length=64)
    repo_link = models.CharField(max_length=128)
    user_name = models.ForeignKey(Users, on_delete=models.CASCADE)
    
    
class TODO(models.Model):
    project_name = models.ForeignKey(Project, on_delete=models.CASCADE)
    content = models.TextField
    time_create = models.DateTimeField(auto_now_add=True, verbose_name="Created")
    time_update = models.DateTimeField(auto_now=True, verbose_name="Updated")
    user_name = models.ForeignKey(Users, on_delete=models.CASCADE)
    activate = models.BooleanField(("active"), default=True)

