import { Injectable } from '@angular/core';

import { IFormState, IState } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _initialFormState: IFormState = {
    name: '',
    date: new Date(),
    count: 1,
    fastDeliver: false,
    notes: [],
  };
  private _state: IState = {
    currentState: this._initialFormState,
    stateChanges: [this._initialFormState],
  };
  private _currentStateIndex = 0;

  constructor() {}

  get currentStateIndex(): number {
    return this._currentStateIndex;
  }

  set currentStateIndex(newIndex: number) {
    this._currentStateIndex = newIndex;
  }

  get state(): IState {
    return this._state;
  }

  updateStateData(newState: IFormState): void {
    if (this._currentStateIndex !== this._state.stateChanges.length - 1) {
      this._state.stateChanges.splice(this._currentStateIndex);
    }
    this._state.stateChanges.push(newState);
    this._currentStateIndex = this._state.stateChanges.length - 1;
    this._state.currentState = newState;
  }
}
