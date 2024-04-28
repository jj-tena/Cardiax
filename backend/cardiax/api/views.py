from rest_framework import viewsets
from cardiax.models import User, Analytic
from cardiax.api.serializer import UserSerializer, AnalyticSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AnalyticViewSet(viewsets.ModelViewSet):
    queryset = Analytic.objects.all()
    serializer_class = AnalyticSerializer

class UserAnalyticsAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = AnalyticSerializer
    #permission_classes = [IsAuthenticated]
    permission_classes = []

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return self.queryset.filter(id=user_id).first().analytics.all()