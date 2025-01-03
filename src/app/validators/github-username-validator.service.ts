import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { GithubUsernameService } from '../services/github-username.service';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubUsernameValidatorService implements AsyncValidator {

  constructor(private _githubUsernameService: GithubUsernameService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this._githubUsernameService.getUser(control.value).pipe(
      map((usernameExists) => (usernameExists ? null : { invalidUsername: true })),
      catchError(() => of(null)),
    )
  }
}
