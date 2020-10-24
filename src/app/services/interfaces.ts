export interface IFormState {
  name: string;
  date: Date;
  count: number;
  fastDeliver: boolean;
  notes: string[];
}

export interface IState {
  currentState: IFormState;
  stateChanges: IFormState[];
}
