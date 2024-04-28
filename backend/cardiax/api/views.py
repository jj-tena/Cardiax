from rest_framework import viewsets
from cardiax.models import User, Analytic
from cardiax.api.serializer import UserSerializer, AnalyticSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AnalyticViewSet(viewsets.ModelViewSet):
    queryset = Analytic.objects.all()
    serializer_class = AnalyticSerializer