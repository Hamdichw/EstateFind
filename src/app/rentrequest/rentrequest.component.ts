import { Component } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-rentrequest',
  templateUrl: './rentrequest.component.html',
  styleUrls: ['./rentrequest.component.css']

})
export class RentrequestComponent {

  constructor( private router : Router){

  }
  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }
 
}
