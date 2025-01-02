import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const emailPatternValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const IS_VALID = emailPattern.test(control.value)

    return IS_VALID ? null : { invalidEmailPattern: true }
};