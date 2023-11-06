from django.urls import path
from .views import UsuarioListView
from .views import PartidoListView

urlpatterns = [
    path('usuario/', UsuarioListView.as_view(), name='listar-usuarios'),
    path('partido/', PartidoListView.as_view(), name='listar-partidos'),
]
