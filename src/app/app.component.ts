import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { StateService } from './services/state.service';
import { createFormControl, transformData } from './utils';

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
      date: createFormControl(transformData(this.stateService.state.currentSate.date)),
      count: createFormControl(this.stateService.state.currentSate.count),
      fastDeliver: createFormControl(this.stateService.state.currentSate.fastDeliver),
      notes: new FormArray([]),
    });

    this.notes = this.form.get('notes') as FormArray;
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  updateState(): void {
    const date = this.form.get('date').value.split('-'),
      year = +date[0],
      month = +date[1] - 1,
      day = +date[2];

    this.stateService.updateStateData({ ...this.form.value, date: new Date(year, month, day) });
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
      const index = this.stateService.currentStateIndex;
      if (control === 'date') {
        controls[control].setValue(transformData(this.stateService.state.stateChanges[index][control]));
      } else {
        controls[control].setValue(this.stateService.state.stateChanges[index][control]);
      }
    }
  }
}
