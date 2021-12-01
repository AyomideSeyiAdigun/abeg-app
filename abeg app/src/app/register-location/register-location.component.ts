import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-location',
  templateUrl: './register-location.component.html',
  styleUrls: ['./register-location.component.css']
})
export class RegisterLocationComponent implements OnInit {

  constructor() { }
  public Address:any={
    street:'',
    state:'',
    city:'',
    country:''
  }
  public userId:any=''

  // Number //
  @Output() telephone= new EventEmitter
  public number:String='signNumber'
  // Number //

  ngOnInit(): void {
    this.userId=localStorage.getItem('IDCODE')
  }
  submitUserAddress(){
    if(this.Address.street =='' || this.Address.state =='' || this.Address.city =='' || this.Address.country =='')return
    this.userId=JSON.parse(this.userId)
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    user2[0].Address = this.Address
    let user3 = user.find((info:any)=>(info.Id==this.userId))
    let user4 =user.indexOf(user3)
    user[user4]=user2[0]
    let user5 = JSON.stringify(user)
    localStorage.setItem('USERS',user5)
    this.telephone.emit(this.number)

  }
}
