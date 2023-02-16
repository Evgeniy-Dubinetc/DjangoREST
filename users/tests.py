import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APISimpleTestCase, APITestCase, force_authenticate
from django.contrib.auth.models import User
from .views import UsersModelViewSet
from .models import Users



class TestUserViewSet(TestCase):

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users')
        view = UsersModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK) 


    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post('/api/users', {
            'user_name': 'andon',
            'first_name': 'anton',
            'last_name': 'dodonov',
            'email': 'dodon@mail.ru'
        })    
        view = UsersModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_admin(self):
        factory = APIRequestFactory()
        request = factory.post('/api/users', {
            'user_name': 'andon',
            'first_name': 'anton',
            'last_name': 'dodonov',
            'email': 'dodon@mail.ru'
        }) 
        admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin') 
        force_authenticate(request, admin)  
        view = UsersModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


    def test_get_detail(self):
        user = Users.objects.create(
            user_name='andon', 
            first_name='anton',  
            last_name='dodonov',
            email='dodon@mail.ru')
        client = APIClient()
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestUserViewSet(APITestCase):

    def test_get_list(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

