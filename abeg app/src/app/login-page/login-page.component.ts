import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public myroute:Router) { }
public User:any={
  email:'',
  password:''
}
  ngOnInit(): void {
    let code:any = false 
    code =JSON.stringify(code)
    localStorage.setItem('IDCODE',code)
  }
  
login(){
  let user:any = localStorage.getItem('USERS')
  let a=[]
 
  if(user!==null){
    user = JSON.parse(user)
    
    for (let i = 0; i < user.length; i++) {
      const element = user[i];
     
      if(this.User.email==element.Email){
        console.log(element)
        if(this.User.password == element.Password){
          a.push(element)
        }
         
      } 
      
    }
    if(a.length>=1){
      let user2 = a.map((info:any)=>info.Id)
      let code= JSON.stringify(user2)
      localStorage.setItem('IDCODE',code)
      this.myroute.navigate([`/Dashboard/:${this.User.email}`])
    }
  }

}
//go to sign up page /
  signUpNow(){
    this.myroute.navigate(['/ETHWAS/SignUp'])
  }
}
