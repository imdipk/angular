import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  //public cartCounter: number=0 
  cartCounter:any;
  constructor(private router: Router, private auth: AuthService ){}

  ngOnInit(): void {}


  GoToHome(){
    this.router.navigate(['home']);

  }

  logout(){
    this.auth.logout();
  }
  
}
