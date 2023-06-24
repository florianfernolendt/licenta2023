import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CerereComponent } from './cerere/cerere.component';
import {RouterModule, RouterOutlet, ROUTES} from "@angular/router";
import { UserComponent } from './user/user.component';
import { RespingereComponent } from './respingere/respingere.component';
import { AdeveritaComponent } from './adeverita/adeverita.component';
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [
    AppComponent,
    CerereComponent,
    UserComponent,
    RespingereComponent,
    AdeveritaComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterOutlet,
        MatChipsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
