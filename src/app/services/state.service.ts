import { Injectable } from '@angular/core';

import { IFormState } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _state: IFormState = {
    name: '',
    date: null,
    count: null,
    fastDeliver: false,
    notes: [],
  };
  private _stateChanges: IFormState[] = [this._state];
  private _currentStateIndex = 0;

  constructor() {}

  get state(): IFormState {
    return this._state;
  }

  get stateChanges(): IFormState[] {
    return this._stateChanges;
  }

  get currentStateIndex(): number {
    return this._currentStateIndex;
  }

  set currentStateIndex(newIndex: number) {
    this._currentStateIndex = newIndex;
  }

  addNewState(newState: IFormState): void {
    this._stateChanges.push(newState);
    this._currentStateIndex = this._stateChanges.length - 1;
    console.log(this._stateChanges, this.currentStateIndex);
  }
}
