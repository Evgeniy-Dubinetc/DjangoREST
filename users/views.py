# from rest_framework import generics
# from django.shortcuts import render
# from .serializers import UsersSerializer

from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView
from .serializers import UsersModelSerializer
from .models import Users


class UsersModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer


class UserAPIVieW(ListAPIView, RetrieveAPIView, UpdateAPIView):
    #    renderer_classes = [JSONRenderer]
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer
