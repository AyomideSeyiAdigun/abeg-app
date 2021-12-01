import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-money-request-page',
  templateUrl: './send-money-request-page.component.html',
  styleUrls: ['./send-money-request-page.component.css']
})
export class SendMoneyRequestPageComponent implements OnInit {

  constructor() { }
public userId:any=''
public allUsers:any
public RecieverDetail:any
public RecieverId:any
public ownerDetail:any
public detailOfReciever:any={
  name:'',
  accountNumber:'',
  amount:'',
  message:'',
  status:'Pending',
  Id:''
}
  ngOnInit(): void {

    this.userId=localStorage.getItem('IDCODE')
    this.userId=JSON.parse(this.userId)
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    this.allUsers=user
    this.ownerDetail=this.allUsers.filter((info:any)=>(info.Id==this.userId))
     
  }

  askUser(userIt:any){
    let user2 = this.allUsers.filter((info:any)=>(info.Id==userIt))
   user2=user2[0]
    this.detailOfReciever.name = `${user2.FirstName} ${user2.LastName}`
    this.detailOfReciever.accountNumber=user2.accountNumber
   this.RecieverId=userIt
    

  }
   sendRequest(){
     if(this.detailOfReciever.amount[0]=='-')return
     // reciever account //
     let generateId=Math.floor(Math.random() *9090)
    let user2 = this.allUsers.filter((info:any)=>(info.Id==this.RecieverId))
    let request={
      amount: this.detailOfReciever.amount,
      message: this.detailOfReciever.message,
      senderAccountNo:this.ownerDetail[0].accountNumber,
      senderName:`${this.ownerDetail[0].FirstName} ${this.ownerDetail[0].LastName}`,
      Id : generateId
    }
    user2[0].moneyRequests.push(request)
    // reciever account ends //

  // sender account//
    this. detailOfReciever.Id = generateId
    this.ownerDetail[0].borrowMeRequest.push(this.detailOfReciever)
    // sender account ends//

    let user3 = this.allUsers.find((info:any)=>(info.Id==this.RecieverId))
    let user6 = this.allUsers.find((info:any)=>(info.Id==this.userId))
    let user4 =this.allUsers.indexOf(user3)
    let user7 =this.allUsers.indexOf(user6)
    this.allUsers[user4]=user2[0]
    this.allUsers[user7]=this.ownerDetail[0]
    let user5 = JSON.stringify(this.allUsers)
    localStorage.setItem('USERS',user5)
   this.detailOfReciever.name=''
   this.detailOfReciever.accountNumber=''
   this.detailOfReciever.amount=''
   this.detailOfReciever.message=''
   this.detailOfReciever.Id=''
    

   }

}
