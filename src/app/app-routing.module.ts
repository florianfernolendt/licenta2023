import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {Cerere} from "./cerere/cerere";
import {Adeverinta} from "./adeverita/adeverinta";
import {AdeveritaComponent} from "./adeverita/adeverita.component";
import {CerereComponent} from "./cerere/cerere.component";
import {RespingereComponent} from "./respingere/respingere.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: CerereComponent
  },
  {
    path: 'list',
    component: AdeveritaComponent
  },
  {
    path: 'respingere',
    component: RespingereComponent
  },
  {
    path: 'login',
    component: UserComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],  exports: [RouterModule]
})
export class AppRoutingModule { }
