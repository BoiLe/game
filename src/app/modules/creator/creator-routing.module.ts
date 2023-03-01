import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCreatorComponent } from './components/layout-creator/layout-creator.component';
import { CreatorComponent } from './creator.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudioComponent } from './pages/studio/studio.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorComponent,
    children: [
      {
        path: '',
        component: LayoutCreatorComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
          {
            path: 'home',
            component: DashboardComponent,
          },
          {
            path: 'studio',
            component: StudioComponent,
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
export class CreatorRoutingModule { }
