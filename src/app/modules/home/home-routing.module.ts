import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SessionGuard } from '@core/guards/session.guard';

const routes: Routes = [
  {
    path: '', // Ruta raíz del módulo Home
    // component: HomePageComponent,
    canActivate: [SessionGuard], // Protege la ruta raíz con el guard
    children: [
      {
        path: 'tracks',
        loadChildren: () =>
          import('@modules/tracks/tracks.module').then((m) => m.TracksModule),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('@modules/favorites/favorites.module').then(
            (m) => m.FavoritesModule
          ),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('@modules/history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: '**',
        redirectTo: 'tracks', // Redirige cualquier ruta no válida a "tracks"
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

