import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'crear-juego',
    pathMatch: 'full'
  },
  {
    path: 'crear-juego',
    loadChildren: () => import('./crear-juego/crear-juego.module').then( m => m.CrearJuegoPageModule)
  },
  {
    path: 'public-game',
    loadChildren: () => import('./public-game/public-game.module').then( m => m.PublicGamePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
