import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingProfileRoutingModule } from './pending-profile-routing.module';
import { PendingProfileComponent } from './pending-profile/pending-profile.component';
import { NbLayoutModule, NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    PendingProfileComponent
  ],
  imports: [
    CommonModule,
    PendingProfileRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    CarouselModule,
    NbIconModule
  ]
})
export class PendingProfileModule { }
