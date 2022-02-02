import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideUsersComponent } from './slide-users/slide-users.component';

const routes: Routes = [
  {
    path: '',
    component: SlideUsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlideUserRoutingModule { }
