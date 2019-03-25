import { Component } from '@angular/core';
import { pageTransition } from './shared/animation';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[pageTransition]

})
export class AppComponent{
  state: string ='in';
  currentUrl: string;
  constructor( private router: Router) {
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = this.router.url;
    });
  }
  ngOnInit() {
    this.state = (this.state === 'in' ? 'out': 'in');
    
  }

}
