import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renthouses',
  templateUrl: './renthouses.component.html',
  styleUrls: ['./renthouses.component.css']
})
export class RenthousesComponent {


  constructor( private router : Router){

  }
  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }
  gorequestrent(){
    this.router.navigate(["/"])

  }

}
