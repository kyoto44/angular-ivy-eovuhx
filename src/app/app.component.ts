import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StateService } from './services/state.service';
import { createFormControl } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(public stateService: StateService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: createFormControl(this.stateService.state.name),
      date: createFormControl(this.stateService.state.date),
      count: createFormControl(this.stateService.state.count),
      fastDeliver: createFormControl(this.stateService.state.fastDeliver),
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
