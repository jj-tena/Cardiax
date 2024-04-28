from rest_framework import serializers
from cardiax.models import User, Analytic

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class AnalyticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analytic
        fields = '__all__'