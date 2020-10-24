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
    this.form = new FormGroup({
      name: createFormControl(this.stateService.state.currentSate.name),
      date: createFormControl(this.stateService.state.currentSate.date.toLocaleDateString().split('.').reverse().join('-')),
      count: createFormControl(this.stateService.state.currentSate.count),
      fastDeliver: createFormControl(this.stateService.state.currentSate.fastDeliver),
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
    console.log(this.stateService.state);
  }

  setNextValue(): void {
    this.stateService.currentStateIndex++;
    this.updaeControls();
    console.log(this.stateService.state);
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
      controls[control].setValue(this.stateService.state.stateChanges[this.stateService.currentStateIndex][control]);
    }
  }
}
