import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/share/layout/layout.component';
import { HostComponent } from './host.component';
import { GameDisplayComponent } from './pages/game-display/game-display.component';
import { GameComponent } from './pages/game/game.component';
import { RankComponent } from './pages/rank/rank.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HostComponent,
        children: [
          {
            path: '',
            redirectTo: 'game',
            pathMatch: 'full',
          },
          {
            path: 'game',
            component: GameDisplayComponent,
          },
          {
            path: 'game-start',
            component: GameComponent,
          },
          {
            path: 'rank',
            component: RankComponent,
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
