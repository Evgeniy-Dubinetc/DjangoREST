from rest_framework import generics
from django.shortcuts import render
from .models import CustomUser
from .serializers import CustomUserSerializer


class CustomUserAPIView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    