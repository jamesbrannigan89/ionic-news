import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrenchNewsPageRoutingModule } from './french-news-routing.module';

import { FrenchNewsPage } from './french-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrenchNewsPageRoutingModule
  ],
  declarations: [FrenchNewsPage]
})
export class FrenchNewsPageModule {}
