# from rest_framework import generics
# from django.shortcuts import render
# from .serializers import UsersSerializer

from rest_framework.viewsets import ModelViewSet, ViewSet
# from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView
from .serializers import UsersModelSerializer
from .models import Users

# from rest_framework.renderers import JSONRenderer

from rest_framework.response import Response


class UsersModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer


# class UserAPIVieW(ListAPIView, RetrieveAPIView, UpdateAPIView):
  #  renderer_classes = [JSONRenderer]
   # queryset = Users.objects.all()
  #  serializer_class = UsersModelSerializer


class UserAPIVieW(ViewSet):

    
    def list(self, request):
        queryset = Users.objects.all()    
        serializer = UsersModelSerializer(queryset, many=True)
        return Response(serializer.data)

    def retraive(self, request):
        queryset = Users.objects.all()    
        serializer = UsersModelSerializer(queryset, many=True)
        return Response(serializer.data)

    def update(self, request):
        queryset = Users.objects.all()    
        serializer = UsersModelSerializer(queryset, many=True)
        return Response(serializer.data)
