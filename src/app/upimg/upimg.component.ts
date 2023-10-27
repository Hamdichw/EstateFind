import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upimg',
  templateUrl: './upimg.component.html',
  styleUrls: ['./upimg.component.css']
})
export class UpimgComponent {
  constructor( private router : Router){

  }
  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }
}
