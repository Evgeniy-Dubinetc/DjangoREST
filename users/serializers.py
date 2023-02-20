from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from todo.models import TODO, Project
from .models import Users




# class UsersSerializer(serializers.ModelSerializer):
class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['user_name', 'first_name', 'last_name', 'email'] 


class UsersSerializer_2(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['is_superuser', 'is_staff']


class ProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'  


class TODOModelSerializer(ModelSerializer):
    class Meta:
        model = TODO
        fields = '__all__'
