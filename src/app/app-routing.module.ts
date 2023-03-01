import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/account/login',
        pathMatch: 'full',
      },
      {
        path: 'creator',
        loadChildren: () => import('./modules/creator/creator.module').then(m => m.CreatorModule)
      },
      {
        path: 'host',
        loadChildren: () => import('./modules/host/host.module').then(m => m.HostModule)
      },
      {
        path: 'player',
        loadChildren: () => import('./modules/player/player.module').then(m => m.PlayerModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
