import {animate, state, style, transition, trigger} from '@angular/animations';


export const InputValueTrigger = trigger('labelState', [
  state('default', style({
    top: '9px',
    left: '37px',
    fontSize: '18px',
    fontWeight: '400',
    cursor: 'pointer'
  })),
  state('minimize',   style({
    top: '-20px',
    left: '0',
    fontSize: '14px',
    fontWeight: '300',
    cursor: 'default'
  })),
  transition('default => minimize', animate('100ms ease-in')),
  transition('minimize => default', animate('155ms ease-out'))
])
