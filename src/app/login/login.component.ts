import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public getJsonValue: any;
  public postJsonValue: any;
  loginService: any;
  user: any;
  users = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  Login() {
    let uname = (document.getElementById('name') as HTMLInputElement).value;
    let pword = (document.getElementById('pw') as HTMLInputElement).value;

    this.http.get('https://fakestoreapi.com/users').subscribe((Response) => {
      this.user = Response;
      this.users = this.user;
      for (let i = 0; i < this.users.length; i++) {
        if (
          this.users[i]['username'] == uname &&
          this.users[i]['password'] == pword
        ) {
          this.router.navigate(['home']);
        }
      }
    });
  }
}
