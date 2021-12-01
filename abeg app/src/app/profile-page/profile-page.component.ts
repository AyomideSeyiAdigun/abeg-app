import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
 
 @Output() goHome=new EventEmitter
public Home:any='profile'
  constructor() { }
public userId:any 
public user:any
public showPage:any
public user1b:any
public user1:any
public userInfo:any={
  FirstName:'',
  MiddleName:'',
  LastName:'',
  Number:'',
  Email:'',
  Street:'',
  City:'',
  State:'',
  Country:''
}
  ngOnInit(): void {
    this.userId=localStorage.getItem('IDCODE')
    this.userId=JSON.parse(this.userId)
    this.user=localStorage.getItem('USERS')
    this.user=JSON.parse(this.user)
    this.user1=this.user.filter((info:any)=>(info.Id==this.userId))
    this.user1b=this.user.filter((info:any)=>(info.Id==this.userId))
    this.user=this.user1[0]
    this.userInfo={
      FirstName:this.user.FirstName,
      MiddleName:this.user.MiddleName,
      LastName:this.user. LastName,
      Number:this.user. Number,
      Email:this.user.Email,
      Street:this.user.Address.street,
      City:this.user.Address.city,
      State:this.user.Address.state,
      Country:this.user.Address.country
    }

  }
  showName(){
      this.showPage='nameBox'
  }
showContact(){
this.showPage='contactBox'
}
showAddress(){
  this.showPage='addressBox'

}

changeName(){
  let user:any=localStorage.getItem('USERS')
  user=JSON.parse(user)
  let user6 =user.filter((info:any)=>(info.Id==this.userId))
  user6[0].FirstName=this.userInfo.FirstName
  user6[0].MiddleName=this.userInfo.MiddleName
  user6[0].LastName=this.userInfo. LastName
  let user2 =user.find((info:any)=>(info.Id==this.userId))
  let user3 = user.indexOf(user2)
  user[user3]=user6[0]
  let user4 = JSON.stringify(user)
  localStorage.setItem('USERS',user4)
}


changeContact(){
  let user:any=localStorage.getItem('USERS')
  user=JSON.parse(user)
  let user6 =user.filter((info:any)=>(info.Id==this.userId))
  user6[0].Email=this.userInfo.Email
  user6[0].Number=this.userInfo.Number
  let user2 =user.find((info:any)=>(info.Id==this.userId))
  let user3 = user.indexOf(user2)
  user[user3]=user6[0]
  let user4 = JSON.stringify(user)
  localStorage.setItem('USERS',user4)
}

changeAddress(){
  let user:any=localStorage.getItem('USERS')
  user=JSON.parse(user)
  let user6 =user.filter((info:any)=>(info.Id==this.userId))
  user6[0].Address.street=this.userInfo.Street
  user6[0].Address.city=this.userInfo.City
  user6[0].Address.state=this.userInfo.State
  user6[0].Address.country=this.userInfo.Country
  let user2 =user.find((info:any)=>(info.Id==this.userId))
  let user3 = user.indexOf(user2)
  user[user3]=user6[0]
  let user4 = JSON.stringify(user)
  localStorage.setItem('USERS',user4)
}
cancelBtn(){
  this.goHome.emit(this.Home)
}
}
