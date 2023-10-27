import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellhome',
  templateUrl: './sellhome.component.html',
  styleUrls: ['./sellhome.component.css']
})
export class SellhomeComponent {

  constructor( private router : Router){

  }
  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }
  gosell(){
    this.router.navigate(["/upload"])
  }

}
