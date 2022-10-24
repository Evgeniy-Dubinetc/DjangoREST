# from rest_framework import serializers
from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Users


# class UsersSerializer(serializers.ModelSerializer):
class UsersModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
