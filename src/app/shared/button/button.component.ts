import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnChanges {

  @Input()
  set defaultBtnText(input: string) {
    if (input !== undefined) {
      this.setDefaultBtn(input);
    }
  }

  @Input()
  set secondaryBtnText(input: string) {
    if (input !== undefined) {
      this.setSecondaryBtn(input);
    }
  }

  btnTextPrimary = '';
  btnTextSecondary = '';

  constructor() {}

  ngOnChanges() {

  }

  setDefaultBtn(t: string) {
    this.btnTextPrimary = t;
  }

  setSecondaryBtn(t: string) {
    this.btnTextSecondary = t;
  }

}
