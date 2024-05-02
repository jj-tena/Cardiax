from rest_framework import viewsets
from cardiax.models import User, Analytic
from cardiax.api.serializer import UserSerializer, AnalyticSerializer
from rest_framework import generics

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password, check_password

import jwt
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password, check_password
from rest_framework import status
from .secrets import JWT_KEY

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'])
    def register(self, request):
        try:
            name = request.data.get('name')
            surname = request.data.get('surname')
            email = request.data.get('email')
            password = request.data.get('password')
            
            existing_user = User.objects.filter(email=email).first()
            if existing_user:
                return Response({'error': 'User with this email already exists'}, status=status.HTTP_400_BAD_REQUEST)

            hashed_password = make_password(password)
            user = User.objects.create(
                name=name,
                surname=surname,
                email=email,
                password=hashed_password
            )

            token = jwt.encode({'user_id': user.id}, JWT_KEY, algorithm='HS256')

            return Response({'id': user.id, 'token': token}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def login(self, request):
        try:
            email = request.data.get('email')
            password = request.data.get('password')
            user = User.objects.filter(email=email).first()
            if user and check_password(password, user.password):
                token = jwt.encode({'user_id': user.id}, JWT_KEY, algorithm='HS256')
                return Response({'id': user.id, 'token': token}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'])
    def analytics(self, request):
        token = request.META.get('HTTP_AUTHORIZATION')
        if not token:
            return Response({'error': 'JWT token is missing'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            decoded_token = jwt.decode(token, JWT_KEY, algorithms=['HS256'])
            user_id = decoded_token.get('user_id')

            user = User.objects.filter(id=user_id).first()
            if not user:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

            analytics = user.analytics_list()
            
            serializer = AnalyticSerializer(analytics, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except jwt.ExpiredSignatureError:
            return Response({'error': 'JWT token has expired'}, status=status.HTTP_401_UNAUTHORIZED)
        except jwt.InvalidTokenError:
            return Response({'error': 'Invalid JWT token'}, status=status.HTTP_401_UNAUTHORIZED)
        
class AnalyticViewSet(viewsets.ModelViewSet):
    queryset = Analytic.objects.all()
    serializer_class = AnalyticSerializer

    @action(detail=False, methods=['post'])
    def add(self, request):
        token = request.META.get('HTTP_AUTHORIZATION')
        print(f"Holaaa, {token}")
        if not token:
            return Response({'error': 'JWT token is missing'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            decoded_token = jwt.decode(token, JWT_KEY, algorithms=['HS256'])
            user_id = decoded_token.get('user_id')

            user = User.objects.filter(id=user_id).first()
            if not user:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

            request.data['user'] = user_id
            request.data['heartDiseaseorAttack'] = 0
            serializer = AnalyticSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except jwt.ExpiredSignatureError:
            return Response({'error': 'JWT token has expired'}, status=status.HTTP_401_UNAUTHORIZED)
        except jwt.InvalidTokenError:
            return Response({'error': 'Invalid JWT token'}, status=status.HTTP_401_UNAUTHORIZED)
    

    