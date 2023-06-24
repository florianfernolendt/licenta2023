import { Component } from '@angular/core';
import {Cerere} from "./cerere/cerere";
import {CerereService} from "./cerere/cerere.service";
import {User} from "./user/user";
import {UserService} from "./user/user.service";
import {Respingere} from "./respingere/respingere";
import {RespingereService} from "./respingere/respingere.service";
import {AdeverintaRespingere} from "./adeverintaRespingere";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //c: Cerere = new Cerere();
  //u: User = new User();
  r: Respingere = new Respingere();
  ra: AdeverintaRespingere = new AdeverintaRespingere();
  constructor(/*private cerereService: CerereService*/ /*private userService: UserService,*/ /*private respingereService: RespingereService*/) {}
  title = 'cerere';

  /*save(){
    this.c.email = "ifmflorian@gmail.com";
    console.log(this.c)
    this.cerereService.saveCerere(this.c);
  }*/

  /*userlogin(){
    console.log(this.u)
    this.userService.loginUser(this.u);
  }*/


}
/*
user: User = new User();

constructor(private userservice:LoginuserService) {
}
userLogin() {
  console.log(this.user)
  this.userservice.loginUser(this.user).subscribe(data=>{
    alert("Login succes!")}, error => alert("Ai gresit ceva!"));
}
*/

