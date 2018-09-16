import {Component} from '@angular/core';
import { InputValueTrigger } from './inputLabel.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ InputValueTrigger ]
})
export class AppComponent {
  public title = 'My First Angular App';
  public textFieldInput = '';
  public input;
  public stateValue = 'default'

  public onFocus() {
    this.stateValue = 'minimize';
  }
  public onBlur(value) {
    value ? null : this.stateValue = 'default';
  }
}
