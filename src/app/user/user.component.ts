import {Component} from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {elementAt} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // @ts-ignore
  email: string;
  // @ts-ignore
  parola: string;

  constructor(private userService: UserService, private router: Router, private http: HttpClient) {
  }
  login(): void {
    this.userService.login(this.email, this.parola)
      .subscribe(response => {

        // @ts-ignore
        const role = response.body.role;

        if (role === 'admin') {
          alert("Admin!");
          console.log('Login successful for admin');
        } else if (role == "secretar" || role == "decan")
        {
          this.router.navigateByUrl('list');
          localStorage.setItem("rol", role);
        } else if (role == "student")
        {
          this.router.navigateByUrl('new');
          localStorage.setItem("rol", this.email);
        }
        else{
          console.error('Invalid role');
        }
      }, error => {
        console.error(error);
      });
  }

}



