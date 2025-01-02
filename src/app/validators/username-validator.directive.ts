import { Directive, forwardRef } from '@angular/core'; 
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { GithubUsernameService } from '../services/github-username.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Directive({
  selector: '[appUsernameValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UsernameValidatorDirective),
      multi: true
    }
  ]
})
export class UsernameValidatorDirective implements AsyncValidator {

  constructor(private readonly _usernameService: GithubUsernameService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this._usernameService.getUser().pipe(
      map(usersList => {
        const userFound = usersList.some(user => user.username.toLowerCase() === control.value.toLowerCase());
        return userFound ? null : { invalidUsername: true };
      }),
      catchError(() => of(null)) 
    );
  }
}
