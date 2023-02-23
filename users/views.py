# from django.shortcuts import render
from .serializers import UsersSerializer

from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView
from rest_framework import generics
#from .serializers import UsersModelSerializer, UsersModelSerializer_2
from .serializers import UsersSerializer, UsersSerializer_2
from .models import Users

# from rest_framework.renderers import JSONRenderer
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated


class UsersModelViewSet(viewsets.ModelViewSet):   
    queryset = Users.objects.all()
#    permission_classes = [IsAuthenticated]
    serializer_class = UsersSerializer


#class UserListAPIView(generics.ListAPIView):    
#    queryset = Users.objects.all()
#    serializer_class = UsersSerializer
#
#    def get_serializer_class(self):
#      if self.request.version == '1':
#        return UsersSerializer
#      return UsersSerializer_2


# class UserAPIVieW(ListAPIView, RetrieveAPIView, UpdateAPIView):
  #  renderer_classes = [JSONRenderer]
   # queryset = Users.objects.all()
  #  serializer_class = UsersModelSerializer


#class UserAPIVieW(ViewSet):
        
    
#    def list(self, request):
#        queryset = Users.objects.all()    
#        serializer = UsersModelSerializer(queryset, many=True)
#        return Response(serializer.data)

#    def retraive(self, request):
#        queryset = Users.objects.all()    
#        serializer = UsersModelSerializer(queryset, many=True)
#        return Response(serializer.data)

#    def update(self, request):
#        queryset = Users.objects.all()    
#        serializer = UsersModelSerializer(queryset, many=True)
#        return Response(serializer.data)
#
# 
# 
# 
# 
# 
#    С помощью GraphQL создать схему, которая позволит одновременно получать ToDo, 
# проекты и пользователей, связанных с проектом
#
#
#