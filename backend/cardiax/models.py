from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class User(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.CharField(max_length=100) 
    password = models.CharField(max_length=100)
    def analytics_list(self):
        return self.analytics.all()

class Analytic(models.Model):
    user = models.ForeignKey('User', related_name='analytics', on_delete=models.CASCADE)
    heartDisease = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    age = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    sex = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    chestPainType = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(4)])
    restingBloodPressure = models.IntegerField()
    serumCholestoral = models.IntegerField()
    fastingBloodSugar = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    restingElectrocardiographicResults = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(2)])
    maximumHeartRateAchieved = models.IntegerField()
    exerciseInducedAngina = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    oldpeak = models.FloatField()
    slopeOfThePeakExercise = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(3)])
    numberOfMajorVessels = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)])
    thal = models.IntegerField()
    timestamp = models.DateTimeField()

