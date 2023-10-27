import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terme',
  templateUrl: './terme.component.html',
  styleUrls: ['./terme.component.css']
})
export class TermeComponent {

  constructor( private router : Router){

  }
  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }


}
