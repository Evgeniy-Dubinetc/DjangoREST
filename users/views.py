from rest_framework import generics
from django.shortcuts import render

from .serializers import UsersSerializer

from .models import Users


class UsersAPIVieW(generics.ListAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
