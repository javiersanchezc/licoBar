import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {path:'categoria',
  loadChildren: () => import('./category/category.module').then(m =>m.CategoryModule)
},

  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
  },
  { path: 'home', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },

  {
    path: '**',
    redirectTo: 'not-found',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
