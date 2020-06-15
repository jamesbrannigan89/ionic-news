import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrelandNewsPageRoutingModule } from './ireland-news-routing.module';

import { IrelandNewsPage } from './ireland-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrelandNewsPageRoutingModule
  ],
  declarations: [IrelandNewsPage]
})
export class IrelandNewsPageModule {}
