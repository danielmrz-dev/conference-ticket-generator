import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root',
})
export class GithubUsernameService {

    constructor(private readonly _http: HttpClient) {}

    getUser(): Observable<IUser[]> {
        return this._http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
    }

}