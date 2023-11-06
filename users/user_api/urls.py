from django.urls import path
from .views import UsuarioListView
from .views import PartidoListView
from .views import UsuarioDetailView
from .views import PartidoDetailView

urlpatterns = [
    path('usuario/', UsuarioListView.as_view(), name='listar-usuarios'),
    path('usuario/<int:pk>/', UsuarioDetailView.as_view(), name='detalle-usuario'),
    path('partido/', PartidoListView.as_view(), name='listar-partidos'),
    path('partido/<int:pk>/', PartidoDetailView.as_view(), name='detalle-partido'),
]
