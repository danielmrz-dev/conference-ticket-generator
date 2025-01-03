import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { GithubUsernameService } from '../services/github-username.service';
import { Observable } from 'rxjs';
import { GithubUsernameValidatorService } from './github-username-validator.service';

@Directive({
  selector: '[appGithubUsernameValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => GithubUsernameValidatorDirective),
      multi: true
    }
  ]
})
export class GithubUsernameValidatorDirective implements AsyncValidator {

  constructor(private _githubUsernameValidator: GithubUsernameValidatorService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this._githubUsernameValidator.validate(control)
  }

}
