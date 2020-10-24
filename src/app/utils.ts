import { FormControl, Validators, ValidatorFn } from '@angular/forms';

export const createFormControl = <T>(initialValue: T, optionalValidators: ValidatorFn[] = []) => {
  return new FormControl(initialValue, [Validators.required, ...optionalValidators]);
};

export const transformData = (date: Date) => date.toLocaleDateString().split('.').reverse().join('-');
