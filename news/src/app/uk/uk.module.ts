import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UKPageRoutingModule } from './uk-routing.module';

import { UKPage } from './uk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UKPageRoutingModule
  ],
  declarations: [UKPage]
})
export class UKPageModule {}
