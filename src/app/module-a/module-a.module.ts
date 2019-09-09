import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { ModuleAComponent } from './module-a.component';
import { ModuleARoutingModule } from './module-a-routing.module';
import { CanDeactivateGuard } from './can-deactivate.guard';

@NgModule({
  declarations: [
    ModuleAComponent
  ],
  imports: [
    RouterModule,
    ModuleARoutingModule
  ],
  providers: [CanDeactivateGuard],
})
export class ModuleAModule { }
