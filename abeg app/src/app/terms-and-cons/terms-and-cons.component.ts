import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-and-cons',
  templateUrl: './terms-and-cons.component.html',
  styleUrls: ['./terms-and-cons.component.css']
})
export class TermsAndConsComponent implements OnInit {

  constructor(public myroute:Router) { }
  public agreedToTerms:boolean=false
  public userId:any = ''

// login page statrs
 
public loginPage:String='loginPage'
  ngOnInit(): void {
this.userId=localStorage.getItem('IDCODE')
  }
  gotoLoginPage(){
    if(!this.agreedToTerms) return
    this.userId=JSON.parse(this.userId)
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    user2[0].Aggrement = this.agreedToTerms
    let user3 = user.find((info:any)=>(info.Id==this.userId))
    let user4 =user.indexOf(user3)
    user[user4]=user2[0]
    let user5 = JSON.stringify(user)
    localStorage.setItem('USERS',user5)
    this.myroute.navigate(['/ETHWAS/Login'])
    
  }

}
