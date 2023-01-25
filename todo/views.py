from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from users.serializers import ProjectModelSerializer, TODOModelSerializer
from .models import Project, TODO
from rest_framework.pagination import LimitOffsetPagination



class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_fields = ['project_name']


class ProjectPagination(LimitOffsetPagination):
    default_limit = 10




class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer


class TODOPagination(LimitOffsetPagination):
    default_limit = 20
