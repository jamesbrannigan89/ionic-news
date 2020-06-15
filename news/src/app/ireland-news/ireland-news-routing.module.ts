import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrelandNewsPage } from './ireland-news.page';

const routes: Routes = [
  {
    path: '',
    component: IrelandNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrelandNewsPageRoutingModule {}
