import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registr-number',
  templateUrl: './registr-number.component.html',
  styleUrls: ['./registr-number.component.css']
})
export class RegistrNumberComponent implements OnInit {

  constructor() { }
public number:any=''
  public userId:any=''
  // token page start//
  @Output() token = new EventEmitter
  public tokenPage:any = 'signTokenPage'
  // token page ends//
  ngOnInit(): void {
    this.userId=localStorage.getItem('IDCODE')
  }
  saveNumber(){
    this.userId=JSON.parse(this.userId)
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    user2[0].Number = this.number
    let user3 = user.find((info:any)=>(info.Id==this.userId))
    let user4 =user.indexOf(user3)
    user[user4]=user2[0]
    let user5 = JSON.stringify(user)
    localStorage.setItem('USERS',user5)
    this.token.emit(this.tokenPage)
  }
}
