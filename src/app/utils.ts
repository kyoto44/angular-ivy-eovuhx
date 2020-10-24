import { FormControl, Validators, ValidatorFn } from '@angular/forms';

export const createFormControl = <T>(initialValue: T, optionalValidators: ValidatorFn[] = []): FormControl => {
  return new FormControl(initialValue, [Validators.required, ...optionalValidators]);
};

