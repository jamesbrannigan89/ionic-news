import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsChoicesPage } from './news-choices.page';

const routes: Routes = [
  {
    path: '',
    component: NewsChoicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsChoicesPageRoutingModule {}
