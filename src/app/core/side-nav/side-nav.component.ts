import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query } from '@angular/animations';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('width', [
      state('inactive', style({
        width: '300px',
      })),
      state('active', style({
        width: '100px',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('profile', [
      state('inactive', style({
        borderRadius: '50%',

      })),
      state('active', style({
        borderRadius: '0%',
      })),
      transition('inactive => active', [animate(300, keyframes([
        style({ borderRadius: '50%', offset: 0 }),
        style({ borderRadius: '30%', offset: 0.6 }),
        style({ borderRadius: '0%', offset: 1 }),
      ]))]),
      transition('active => inactive', [animate(300, keyframes([
        style({ borderRadius: '0%', offset: 0 }),
        style({ borderRadius: '30%', offset: 0.6 }),
        style({ borderRadius: '50%', offset: 1 }),
      ]))]),
    ]),
    // trigger('cubic', [
    //   state('inactive', style({
    //     width: '257px',
    //     height: '109px'

    //   })),
    //   state('active', style({
    //     width: '0',
    //     height: '0'
    //   })),
    //   transition('inactive => active', animate('500ms ease-in')),
    //   transition('active => inactive', animate('500ms ease-out'))
      // transition('inactive => active', [animate(300, keyframes([
      //   style({ width: '257px', height: '109px', offset: 0 }),
      //   style({ width: '150px', height: '50px', offset: 0.6 }),
      //   style({ width: '0', height: '0', offset: 1 }),
      // ]))]),
      // transition('active => inactive', [animate(300, keyframes([
      //   style({ width: '0',height:'0', offset: 0 }),
      //   style({ width: '150px',height:'50px', offset: 0.6 }),
      //   style({ width: '257px',height:'109px', offset: 1 }),
      // ]))]),
    // ])
    // state('active', style({
    //   transnform: translateY()
    // }))
    trigger('cubic', [
      transition('* => void', [
        // hide the inner elements
        query('.big-oval', style({ opacity: 0 })),
        query('.small-oval', style({ opacity: 0 })),
  
        // animate the inner elements in, one by one
        // query('.big-oval', animate(1000, style({ opacity: 1 })),
        // query('.small-oval', animate(1000, style({ opacity: 1 })),
      ])
    ])
  ]


})
export class SideNavComponent implements OnInit {
  state: string = 'inactive';
  constructor() { }
  toggleSidebar() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    console.log(this.state);

  }
  ngOnInit() {
  }

}
