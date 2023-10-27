import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


constructor( private router : Router){

}

gologin(){
  this.router.navigate(["/signin"])
}
gosignup(){
  this.router.navigate(["/signup"])
}
gobuy(){
  this.router.navigate(["/buyhouse"])
}
gosell(){
  this.router.navigate(["/sell"])
}
gorent(){
  this.router.navigate(["/renthouse"])
}
gohome(){
  this.router.navigate(["/home"])
}
}
