import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'news-choices',
    loadChildren: () => import('./news-choices/news-choices.module').then( m => m.NewsChoicesPageModule)
  },
  {
    path: 'ireland-news',
    loadChildren: () => import('./ireland-news/ireland-news.module').then( m => m.IrelandNewsPageModule)
  },
  {
    path: 'uk',
    loadChildren: () => import('./uk/uk.module').then( m => m.UKPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
