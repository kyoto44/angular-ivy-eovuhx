export interface IFormState {
  name: string;
  date: Date;
  count: number;
  fastDeliver: boolean;
  notes: string[];
}

export interface IState {
  currentSate: IFormState;
  stateChanges: IFormState[];
}
