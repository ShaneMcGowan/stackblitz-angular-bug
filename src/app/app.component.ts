import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'can-deactivate-test';

  constructor(private router: Router) {

    this.router.events.subscribe(event => {

      if (event instanceof RouteConfigLoadStart) {
        console.log('lazy loading started');
      } else if (event instanceof RouteConfigLoadEnd) {
        console.log('lazy loading ended');
      }

    });
  }

}
