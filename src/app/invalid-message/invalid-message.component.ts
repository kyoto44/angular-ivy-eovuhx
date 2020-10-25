import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

export type InvalidContent = { message: string; error: string };

@Component({
  selector: 'app-invalid-message',
  templateUrl: './invalid-message.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class InvalidMessageComponent {
  @Input() formContol: FormControl;
  @Input() invalidContent: InvalidContent[];

  constructor() {}
}
