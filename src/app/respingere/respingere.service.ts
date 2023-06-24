import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cerere} from "../cerere/cerere";
import {Observable} from "rxjs";
import {Respingere} from "./respingere";

@Injectable({
  providedIn: 'root'
})
export class RespingereService {
  private baseUrl="http://localhost:8080/adeverinta"
  constructor(private http: HttpClient) {}

  respingereAdeverinta(numar: string, motiv: string) {
    const url = `${this.baseUrl}/respingere/${numar}/${motiv}`;
    return this.http.post(url, null);
  }

}
