import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrenchNewsPage } from './french-news.page';

const routes: Routes = [
  {
    path: '',
    component: FrenchNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrenchNewsPageRoutingModule {}
