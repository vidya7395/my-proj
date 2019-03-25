import { trigger, state, style, transition, animate } from '@angular/animations';

export const pageTransition =
    trigger('transition', [
        state('inactive', style({
            transform: 'translateX(0)', opacity: '0'
        })),
        transition('void=> *', [
            style({ transform: 'translateX(30%)', opacity: 1 }),
            animate(300)
        ])
    ]);