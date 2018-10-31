import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found.component';
import { AddComponent } from './item/add.component';
import { ViewComponent } from './item/view.component';
import { UpdateComponent } from './item/update.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
