import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cerere} from "./cerere";
import {firstValueFrom, Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CerereService {
  constructor(private http: HttpClient) {}

    async saveCerere(cerere: Cerere):Promise<object>{
      return await firstValueFrom(this.http.post('http://localhost:8080/adeverinta/adv_noua',cerere));

  }
}
