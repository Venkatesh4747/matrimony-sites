import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NbButton, NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class UserProfileModule { }
