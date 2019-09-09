import { Component } from '@angular/core';

@Component({
  selector: 'app-module-a-component',
  template: `<button [routerLink]="'/module-b'">Go to Module B</button>`
})
export class ModuleAComponent {

}