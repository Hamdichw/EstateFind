import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyhouses',
  templateUrl: './buyhouses.component.html',
  styleUrls: ['./buyhouses.component.css']
})
export class BuyhousesComponent {
  constructor( private router : Router){

  }
  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }
 
}
