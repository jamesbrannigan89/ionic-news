import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsChoicesPageRoutingModule } from './news-choices-routing.module';

import { NewsChoicesPage } from './news-choices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsChoicesPageRoutingModule
  ],
  declarations: [NewsChoicesPage]
})
export class NewsChoicesPageModule {}
