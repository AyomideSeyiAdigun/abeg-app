import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.css']
})
export class PasswordPageComponent implements OnInit {

  constructor() { }
public Password:any=''
public Password2:any=''
public userId:any=''
public alertIt:boolean=false
public alertValue:any=''
// terms and cons starts
@Output() termsandcons=new EventEmitter
public termsandcon:any='signTermsandCons'

  ngOnInit(): void {
    this.userId=localStorage.getItem('IDCODE')
  }
  setPassword(){
    if(this.Password == this.Password2){
      this.userId=JSON.parse(this.userId)
      let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    user2[0].Password = this.Password
    let user3 = user.find((info:any)=>(info.Id==this.userId))
    let user4 =user.indexOf(user3)
    user[user4]=user2[0]
    let user5 = JSON.stringify(user)
    localStorage.setItem('USERS',user5)
    this.termsandcons.emit(this.termsandcon)

    }else {
      this.alertValue='Passwords do not match'
      this.alertIt=true
      this.showIt()
    }
    
    
  }
  showIt(){
    setTimeout(()=>{
      this.alertIt =false
    },4000)
  }
}
