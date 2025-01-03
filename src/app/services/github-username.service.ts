import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class GithubUsernameService {

    constructor(private readonly _http: HttpClient) {}

    getUser(username: string): Observable<boolean> {
        return this._http.get<boolean>(`https://api.github.com/users/${username}`).pipe(
            map(() => true),
            catchError(() => of(false))
        )
    }

}