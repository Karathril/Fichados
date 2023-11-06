from django.db import models

# Create your models here.
class Usuario(models.Model):
    email = models.CharField(max_length=200, unique=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    password = models.CharField(max_length=30)
    rol = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre

class Partido(models.Model):
    idPartido = models.AutoField(primary_key=True)
    cantPlayers = models.CharField(max_length=10)
    date = models.CharField(max_length=50)
    nameCancha = models.CharField(max_length=10)
    nameGame = models.CharField(max_length=40)
    p1 = models.CharField(max_length=50)
    p2 = models.CharField(max_length=50)
    p3 = models.CharField(max_length=50)
    p4 = models.CharField(max_length=50)
    ubicacion = models.CharField(max_length=50)
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nombre
