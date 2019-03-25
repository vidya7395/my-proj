import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)',
        
      })),
      state('active', style({
        transform: 'scale(1.04)',
        borderWidth:"4px"
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),

    trigger('note', [
      state('inactive', style({
        opacity: '0',
      })),
      state('active', style({
        opacity: '1',
      })),
      transition('active => inactive', [
        animate(200, keyframes([
          style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
          style({ opacity: 0, transform: 'translateY(15px)', offset: 0.6 }),
          style({ opacity: 0, transform: 'translateY(30px)', offset: 1 }),
        ]))
      ]),
      transition('inactive => active', [
        animate(200, keyframes([
          style({ opacity: 0, transform: 'translateY(30px) ', offset: 0 }),
          style({ opacity: 0, transform: 'translateY(15px) ', offset: 0.7 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ])
    ]),
    trigger('itemEnter', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate('300ms ease-out', style({ transform: 'scaleY(0) translateY(200px)' }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  state: string = 'inactive';
  isTranslate: string ='false';
  constructor(private router: Router) { }

  ngOnInit() {
    this.isTranslate ='true';
  }
  ngOnDestroy(){
    this.isTranslate ='true';
  }
  /* toogle  */
  toggleFocus() {
    console.log(this.state);
    // this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.state ='active';
    
  }
  // toggleFocusInactive(){
  //   this.state ='active';
  // }

  /* login and navigate to main screen */
  loginUser(event) {
    event.preventDefault();
    const target = event.target
    var username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    // this.Auth.getUserDetails(username, password)
    console.log(username, password);
    if (username == 'admin' && password == 'admin') {
      this.router.navigate(['mainpage']);
    }
    else {
      alert("not authenticated");
      target.querySelector('#username').value = '';
      target.querySelector('#password').value = '';
    }
  }
}
