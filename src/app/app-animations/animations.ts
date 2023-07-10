import { state, trigger, animate, transition, style } from '@angular/animations';


export let easeUp = trigger('ease-up', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(20%)'
  })),
  state('slideUp', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('slideUp <=> hidden', animate('600ms'))
]);

export let easeIn =  trigger('ease-in', [
    state('currentState', style({
        opacity: 1,
        height: '100%'
    })),
    transition('* => currentState', [
        style({
            opacity: 0.2,
            height: '10%'
        }),
        animate('0.5s')
    ])
]);

export let fadeInSlideDown = trigger('fadeInSlideDown', [
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateY(-10%)'
      }),
      animate('1s')
    ])
]);

export let slideInRightToLeft = trigger('slideInRightToLeft', [
    transition('void => *', [
      style({
        transform: 'translateX(20%)'
      }),
      animate('1s')
    ])
  ])

export let slideInLeftToRight = trigger('slideInLeftToRight', [
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-20%)'
      }),
      animate('1s')
    ])
  ])
