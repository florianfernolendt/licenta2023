import { Component } from '@angular/core';
import {Respingere} from "./respingere";
import {RespingereService} from "./respingere.service";

@Component({
  selector: 'app-respingere',
  templateUrl: './respingere.component.html',
  styleUrls: ['./respingere.component.css']
})
export class RespingereComponent {
  numar!:String;
  motiv!:String;
  nevoie!:String;
  mentiune!:String;
  numestud!:String;
  constructor(private respingereService: RespingereService) {
  }
  ngOnInit() {
    // @ts-ignore
    this.nevoie = localStorage.getItem('nevoie');
    // @ts-ignore
    this.mentiune = localStorage.getItem("mentiune");
    // @ts-ignore
    this.numestud = localStorage.getItem("nume_student");
  }

  onRespingere() {
    // @ts-ignore
    this.numar = localStorage.getItem("nr_respins");
    // @ts-ignore
    this.respingereService.respingereAdeverinta(this.numar, this.motiv).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
    alert("Adeverința a fost respinsă cu succes!");
  }

}
