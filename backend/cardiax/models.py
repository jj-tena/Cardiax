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
    heartDiseaseorAttack = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    highBP = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    highChol = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    cholCheck = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    imc = models.IntegerField()
    smoker = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    stroke = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    diabetes = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)])
    physActivity = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    fruits = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    veggies = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    hvyAlcoholConsump = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    anyHealthcare = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    noDocbcCost = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    genHlth = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(4)])
    menthlth = models.IntegerField()
    physHlth = models.IntegerField()
    diffWalk = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    sex = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
    age = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(12)])
    education = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(6)])
    income = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    timestamp = models.DateTimeField()

