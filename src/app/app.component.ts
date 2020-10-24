import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { StateService } from './services/state.service';
import { createFormControl } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  notes: FormArray;

  constructor(public stateService: StateService) {}

  ngOnInit(): void {
    console.log(this.stateService.state.date);

    this.form = new FormGroup({
      name: createFormControl(this.stateService.state.name),
      date: createFormControl(this.stateService.state.date),
      count: createFormControl(this.stateService.state.count),
      fastDeliver: createFormControl(this.stateService.state.fastDeliver),
      notes: new FormArray([]),
    });

    this.notes = this.form.get('notes') as FormArray;
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  setPrevValue(): void {
    this.stateService.currentStateIndex--;
    this.updaeControls();
  }

  setNextValue(): void {
    this.stateService.currentStateIndex++;
    this.updaeControls();
  }

  addNewNote(): void {
    this.notes.push(createFormControl(''));
  }

  removeNote(id: number): void {
    this.notes.removeAt(id);
  }

  private updaeControls(): void {
    const controls = this.form.controls;
    for (const control in controls) {
      controls[control].setValue(this.stateService.stateChanges[this.stateService.currentStateIndex][control]);
    }
  }
}
