import { Injectable } from '@angular/core';

import { IFormState } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state: IFormState = {
    name: '',
    date: null,
    count: null,
    fastDeliver: false,
    notes: [],
  };
  constructor() {}
}
