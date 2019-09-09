import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleAComponent } from './module-a.component';
import { CanDeactivateGuard } from './can-deactivate.guard';


const routes: Routes = [
  { path: '', component: ModuleAComponent, canDeactivate: [CanDeactivateGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class ModuleARoutingModule { }
