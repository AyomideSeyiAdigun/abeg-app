import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-birth-day',
  templateUrl: './register-birth-day.component.html',
  styleUrls: ['./register-birth-day.component.css']
})
export class RegisterBirthDayComponent implements OnInit {
  
  constructor() { }
public userId :any=String
public Birthday:any=''
// location starts //
@Output() location=new EventEmitter
public locate:any="signAddress"
// location ends //
  ngOnInit(): void {
this.userId = localStorage.getItem('IDCODE')
  }
  saveBirthday(){
    if(this.Birthday =='')return
    this.userId=JSON.parse(this.userId)
    let user:any=localStorage.getItem('USERS')
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    user2[0].Birthday = this.Birthday
    let user3 = user.find((info:any)=>(info.Id==this.userId))
    let user4 =user.indexOf(user3)
    user[user4]=user2[0]
    let user5 = JSON.stringify(user)
    localStorage.setItem('USERS',user5)
    this.location.emit(this.locate)
  }
}
