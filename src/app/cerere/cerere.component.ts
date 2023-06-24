import { Component } from '@angular/core';
import {Cerere} from "./cerere";
import {UserService} from "../user/user.service";
import {RespingereService} from "../respingere/respingere.service";
import { CerereService } from './cerere.service';

@Component({
  selector: 'app-cerere',
  templateUrl: './cerere.component.html',
  styleUrls: ['./cerere.component.css']
})
export class CerereComponent {
  c: Cerere = new Cerere();

  constructor(private cerereService: CerereService) {
  }
  async save (){
    // @ts-ignore
    this.c.email = localStorage.getItem('rol');
    alert("Adeverință trimisă cu succes!");
    await this.cerereService.saveCerere(this.c);
  }
}
