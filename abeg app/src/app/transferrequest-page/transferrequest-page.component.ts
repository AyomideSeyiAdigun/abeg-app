import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferrequest-page',
  templateUrl: './transferrequest-page.component.html',
  styleUrls: ['./transferrequest-page.component.css']
})
export class TransferrequestPageComponent implements OnInit {

  constructor() { }
public userId:any
public loggedUser:any
public requests:any
public user:any
 // show //
 public showPage:any="recieveRequest"
// accepting requests //
public pageToShow:any='Detail' 
public toSendTo:any={
  name:'',
  accountNumber:'',
  amount:'',
  pin:'',
  token:''

}
public page :any='List'
public token:any
public toSendId :any
public sentRequest:any

  ngOnInit(): void {
    this.userId=localStorage.getItem('IDCODE')
    this.userId= JSON.parse(this.userId)
    this.user = localStorage.getItem('USERS')
    this.user=JSON.parse(this.user)
    this.loggedUser=this.user.filter((info:any)=>(info.Id==this.userId))
  this.requests=this.loggedUser[0].moneyRequests
  let a =[]
  for (let i =this.requests.length; i >= 1; i--) {
    const element = this.requests[i];
    if(element !==undefined){
      a.push(element)
    }
    
  }
  this.requests=a
  this.sentRequest=this.loggedUser[0].borrowMeRequest
  let b=[]
  for (let i =this.sentRequest.length; i>=1;i--) {
    const element = this.sentRequest[i];
    if(element!==undefined){
      b.push(element)
    }

    
  }
    this.sentRequest=b
  }
  deleteRequest(id:any,acntNo:any){
    // declining request//
    let requestToDecline = this.requests.filter((info:any)=>(info.Id !==id))
    this.loggedUser[0].moneyRequests=requestToDecline

    //  declining request ends//

    // notifying the sender //
    let sender = this.user.filter((info:any)=>(info.accountNumber == acntNo))
     
    let senderRequest = sender.map((info:any)=>info.borrowMeRequest)
    senderRequest = senderRequest[0].filter((info:any)=>(info.Id == id))
     if(senderRequest.length>=1){
    senderRequest[0].status='Declined'
     
  // sending Notification//
  let msg=`${this.loggedUser[0].FirstName} ${this.loggedUser[0].LastName} declined your request`
  sender[0].notification.push(msg)
  // sending notification ends //

  // owner save
  let user3 = this.user.find((info:any)=>(info.Id==this.userId))
  let user4 =this.user.indexOf(user3)
  this.user[user4]=this.loggedUser[0]

  // sender save 
  let user6 = this.user.find((info:any)=>(info.accountNumber == acntNo))
  let user7 =this.user.indexOf(user6)
  this.user[user7]=sender[0]
  //

  let user5 = JSON.stringify(this.user)
  localStorage.setItem('USERS',user5)

  
  
  }
    // notifying the sender ends//

    



  }

  // accepting a request FUNCTIONS START HERE//
  acceptRequest(val:any){
     
    this.toSendTo.name=val.senderName
    this.toSendTo.accountNumber=val.senderAccountNo
    this.toSendTo.amount=val.amount
    this.toSendId = val
    this.page='Transfer'

  }

  //  setting details
  setDetails(){
    if(this.toSendTo.amount[0]=='-')return
  if(this.toSendTo.name =='' || this.toSendTo.accountNumber =='' || this.toSendTo.amount =='') return
    this.pageToShow='Pin'
  }

  // setting details ends //

  // inputting pin starts //
  setPin(){
  if(this.toSendTo.pin =='') return
  if(this.toSendTo.pin !== this.loggedUser[0].Password) return
    this.token = Math.floor(Math.random() * 900000)
    this.pageToShow='Token'
    
  }

  // inpuuting pin ends//

  // transfer now function //
  transferNow(){
    if(Number(this.toSendTo.token) !== this.token) return
    if( Number(  this.loggedUser[0].accountBalance)<Number(this.toSendTo.amount))return
    // deducting money from the main account starts here//
    this.loggedUser[0].accountBalance= Number(  this.loggedUser[0].accountBalance)-Number(this.toSendTo.amount)
    // decuting money from main account ends//

    //adding money to the reciever account
    let reciever =this.user.filter((info:any)=>(info.accountNumber == this.toSendId.senderAccountNo))
    reciever[0].accountBalance = Number(reciever[0].accountBalance) + Number(this.toSendTo.amount)
    // adding money to the reciever account ends //

    // sending history to the person giving out //
    let t = new Date()
 
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let history ={
  accountFundedId:reciever[0].Id,
  accountFundedName:`${reciever[0].FirstName} ${reciever[0].LastName}`,
  amountSent:this.toSendTo.amount,
  time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
  date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
  
  }
  this.loggedUser[0].transferHistory.push(history)
  this.loggedUser[0].moneyRequests=this.loggedUser[0].moneyRequests.filter((info:any)=>info.Id !== this.toSendId.Id)
  
  // sending history to the main account endss //

  // sending history to the person asking for help account//
  let history2 ={
    accountFundedById:this.loggedUser[0].Id,
    accountFundedByName:`${this.loggedUser[0].FirstName} ${this.loggedUser[0].LastName}`,
    amountRecieved:this.toSendTo.amount,
    time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
    date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
    
    }
    reciever[0].recievedHistory.push(history2)
    let msg=`${this.loggedUser[0].FirstName} ${this.loggedUser[0].LastName} has accepted your request`
    reciever[0].notification.push(msg)
    reciever[0].borrowMeRequest=reciever[0].borrowMeRequest.filter((info:any)=>info.Id !== this.toSendId.Id)
    // sending history  to it endss//

    let recieve2  =this.user.find((info:any)=>(info.accountNumber == this.toSendId.senderAccountNo))
    let loggedUser =this.user.find((info:any)=>(info.Id==this.userId))
    let re3 = this.user.indexOf(recieve2)
    let log2 = this.user.indexOf(loggedUser)
    this.user[re3]=reciever[0]
    this.user[log2]=this.loggedUser[0]

    let all = JSON.stringify(this.user)
    localStorage.setItem('USERS',all)
  }
  // transfer now ends//

// show recieveRequest//
displayrecieveRequest(){
this.showPage="recieveRequest"
}

// show recieveRequest() ends //

// sentRequest()//
displaysentRequests(){
  this.showPage='sentRequests'

}
// sentRequest() ends //
}
