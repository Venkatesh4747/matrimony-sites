import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideUserRoutingModule } from './slide-user-routing.module';
import { SlideUsersComponent } from './slide-users/slide-users.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { HammerModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SlideUsersComponent
  ],
  imports: [
    CommonModule,
    SlideUserRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    NbIconModule,
    HammerModule
  ]
})
export class SlideUserModule { }
