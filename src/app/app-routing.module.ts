import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'module-a', loadChildren: () => import('./module-a/module-a.module').then(m => m.ModuleAModule) },
  { path: 'module-b', loadChildren: () => import('./module-b/module-b.module').then(m => m.ModuleBModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
