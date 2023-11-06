from rest_framework import generics
from .models import Usuario
from .serializers import UsuarioSerializer
from .models import Partido
from .serializers import PartidoSerializer

class UsuarioListView(generics.ListAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class PartidoListView(generics.ListAPIView):
    queryset = Partido.objects.all()
    serializer_class = PartidoSerializer


class UsuarioDetailView(generics.RetrieveAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class PartidoDetailView(generics.RetrieveAPIView):
    queryset = Partido.objects.all()
    serializer_class = PartidoSerializer