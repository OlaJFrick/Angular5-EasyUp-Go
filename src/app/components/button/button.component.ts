import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input()
  set textInput(t: string) {
    if (t !== undefined) {
      this.setText(t);
    }
  }

  @Input()
  set commandInput(t: string) {
    if (t !== undefined) {
      this.setCommand(t);
    }
  }

  constructor() {}

  btnText = '';
  commandText = '';

  setText(t: string) {
    this.btnText = t;
  }

  setCommand(t: string) {
    this.commandText = t;
  }

}
