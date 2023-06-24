import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "./user";
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="http://localhost:8080/adeverinta"
  constructor(private http: HttpClient) {}

  async loginUser(user: User):Promise<object>{
    return await firstValueFrom(this.http.post('http://localhost:8080/adeverinta/login/',user))
}

  login(email: string, password: string): Observable<HttpResponse<string>> {
    const url = `${this.baseUrl}/login`;
    const loginInfo = { email, parola: password };
    return this.http.post<string>(url, loginInfo, { observe: 'response' });
  }
}
