import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adeverita',
  templateUrl: './adeverita.component.html',
  styleUrls: ['./adeverita.component.css']
})
export class AdeveritaComponent {
  Adeverinte: any[] = [];
  rol!:string
  constructor(private http: HttpClient, private router: Router) {
  }
  ngOnInit(){
    // @ts-ignore
    this.rol = localStorage.getItem('rol');
    this.http.get("http://localhost:8080/adeverinta/toate").subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.Adeverinte = resultData;
    });
  }
  aprobare(id:String){
    if (localStorage.getItem("rol")=="secretar")
    {
      const baseUrl = 'http://localhost:8080/adeverinta/aprobare_secretar/';
      const url = baseUrl.concat(id.toString());
      // @ts-ignore
      this.http.post(url).subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.Adeverinte = resultData;
      });
      window.location.reload();
    } else if(localStorage.getItem("rol")=="decan")
    {
      const baseUrl = 'http://localhost:8080/adeverinta/aprobare_decan/';
      const url = baseUrl.concat(id.toString());
      // @ts-ignore
      this.http.post(url).subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.Adeverinte = resultData;
      });
      window.location.reload();
    }
  }
  respingere(id:string, nevoie:string, mentiune:string, nume:string)
  {
    this.router.navigateByUrl('respingere');
    localStorage.setItem("nr_respins", id);
    localStorage.setItem("nevoie",nevoie);
    localStorage.setItem("mentiune",mentiune);
    localStorage.setItem("nume_student",nume);
  }

  confirmare_stergere(id:string)
  {
  if (confirm('Sunteți sigur că doriți să ștergeți adeverința?')) {
    const baseUrl = 'http://localhost:8080/adeverinta/stergere/';
    const url = baseUrl.concat(id.toString());
    // @ts-ignore
    this.http.delete(url).subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.Adeverinte = resultData;
    });
    window.location.reload();
  }
  }

}
