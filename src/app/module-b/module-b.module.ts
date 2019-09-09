import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { ModuleBComponent } from './module-b.component';
import { ModuleBRoutingModule } from './module-b-routing.module';

@NgModule({
  declarations: [
    ModuleBComponent
  ],
  imports: [
    RouterModule,
    ModuleBRoutingModule
  ],
  providers: [],
})
export class ModuleBModule { }
