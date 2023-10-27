import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent {

  constructor( private router : Router){

  }
  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }
}
