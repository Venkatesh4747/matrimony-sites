import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingProfileComponent } from './pending-profile/pending-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PendingProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingProfileRoutingModule { }
