import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { cartCounter } from '../header/header.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  li:any;
  lis=[];
  constructor(private http : HttpClient){
  
}
 
  ngOnInit(): void {
    this.http.get("https://fakestoreapi.com/products/category/men's%20clothing")
    .subscribe(Response => {
 
      
      
      console.log(Response)
      this.li=Response;
      this.lis=this.li;
      
    });
  }

  addToCart(){
    //cartCounter
    alert("dhi")
  }
}

