from django.contrib import admin
from .models import Usuario
from .models import Partido
# Register your models here.
@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    pass

@admin.register(Partido)
class PartidoAdmin(admin.ModelAdmin):
    pass