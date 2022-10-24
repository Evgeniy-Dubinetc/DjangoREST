# from rest_framework import generics
# from django.shortcuts import render
# from .serializers import UsersSerializer

from rest_framework.viewsets import ModelViewSet
from .serializers import UsersModelSerializer

from .models import Users


class UsersModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer




'''
class UsersAPIVieW(generics.ListAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
'''

