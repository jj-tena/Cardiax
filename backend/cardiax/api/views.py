from rest_framework import viewsets
from cardiax.models import User
from cardiax.api.serializer import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer