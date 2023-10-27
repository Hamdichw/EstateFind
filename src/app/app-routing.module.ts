import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyhousesComponent } from './buyhouses/buyhouses.component';
import { BuyrequestComponent } from './buyrequest/buyrequest.component';
import { HeaderComponent } from './header/header.component';
import { RentrequestComponent } from './rentrequest/rentrequest.component';
import { RenthousesComponent } from './renthouses/renthouses.component';
import { SellhomeComponent } from './sellhome/sellhome.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UpimgComponent } from './upimg/upimg.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermeComponent } from './terme/terme.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : "buyhouse" , component : BuyhousesComponent },
  {path : "buyresquest" , component : BuyrequestComponent },
  {path : "home" , component : HeaderComponent },
  {path : "rentresquest" , component : RentrequestComponent },
  {path : "renthouse" , component : RenthousesComponent },
  {path : "sell" , component :SellhomeComponent },
  {path : "signin" , component : SignupComponent },
  {path : "signup" , component : SigninComponent },
  {path : "upload" , component : UpimgComponent },
  {path : "privacy" , component : PrivacyComponent },
  {path : "terme" , component : TermeComponent },
  {path : "about" , component : AboutComponent },
  {path : "contact" , component : ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
