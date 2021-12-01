import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public myroute:Router) { }

public showBar:boolean=false
  ngOnInit(): void {
    let code:any = false 
    code =JSON.stringify(code)
    localStorage.setItem('IDCODE',code)
  }
  gotoSignUpPage(){
    this.myroute.navigate(['/ETHWAS/SignUp'])
  }
  gotoLoginPage(){
    // this.pages='loginPage'
    this.myroute.navigate(['/ETHWAS/Login'])
  }
 
  openBar(){

    this.showBar=true
  }
  textDeco(){
    
  }
}
