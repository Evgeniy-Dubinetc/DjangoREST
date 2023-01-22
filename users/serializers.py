# from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from todo.models import TODO, Project
from .models import Users



# class UsersSerializer(serializers.ModelSerializer):
class UsersModelSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


class ProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'  


class TODOModelSerializer(ModelSerializer):
    class Meta:
        model = TODO
        fields = '__all__'
