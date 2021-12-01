import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {

  constructor() { }
  public userId:any = localStorage.getItem('IDCODE')
  public pageToShow:any='Detail' 
  public toSendTo:any={
    name:'',
    accountNumber:'',
    amount:'',
    pin:'',
    token:''

  }
  public transferFrom :any='Account'
  public token:any=''
  // userrr
  public allUser:any=''
  public user:any=''
  public user2:any=''
  public user14:any=''

  // wallets
  public Wuser:any=''
  public Wuser2:any=''
  public Wuser3:any=''
  public opValue:any=''
  public Wuser4:any=''

  //
  ngOnInit(): void {
    this.userId=JSON.parse(this.userId)
    this.user= localStorage.getItem('USERS') 
    this.user=JSON.parse(this.user)
     
    this.Wuser = this.user.filter((info:any)=>(info.Id == this.userId))
    this.Wuser2 = this.Wuser.map((info:any)=>info.wallets)
    this.Wuser2=this.Wuser2[0]
  }
  // collect sender details//
  setDetails(){
    if(this.toSendTo.amount[0]=='-')return
    if(this.toSendTo.name =='' || this.toSendTo.accountNumber =='' || this.toSendTo.amount =='') return
    this.user2 = this.user.filter((info:any)=>(this.toSendTo.accountNumber==info.accountNumber))
    this.user14 = this.user.filter((info:any)=>(this.userId==info.Id))
    
   this.pageToShow='Pin'
  }
  // collect details ends//

  // confirm pin code //

  setPin(){
    if(this.toSendTo.pin !== this.user14[0].Password)return
    this.pageToShow='Token'
    this.token = Math.floor(Math.random() * 879927)

  }

  // confirm pin code ends //

  // transfer money now //

  transferNow(){
    if(Number(this.toSendTo.token) !== this.token) return

    
    // deducting money from the owner account 
    let user6 = this.user.filter((info:any)=>(this.userId==info.Id))
    let user7 = user6[0].accountBalance
    if(Number(user7) < Number(this.toSendTo.amount)) return
    let user8 = Number(user7)-Number(this.toSendTo.amount)
    user6[0].accountBalance = user8
    // deducting money from the money ends//
  
    // sending money to the account Number//
    let user9 = this.user2[0].accountBalance
    let user10 = Number(user9)+Number(this.toSendTo.amount)
    this.user2[0].accountBalance=user10
    //sending money to the account Number ends here //
    
    //HISTORY//
    
    // sender historyyy//
    let user11 = user6[0].transferHistory
    let t = new Date()
    let time =`${ t.getHours }: ${t.getMinutes}:${t.getSeconds}`
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]}`
    let history ={
    accountFundedId:this.user2[0].Id,
    accountFundedName:`${this.user2[0].FirstName} ${this.user2[0].LastName}`,
    amountSent:this.toSendTo.amount,
    time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
    date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
    
    }
    user11.push(history)
    // sender history ends//

    // reciever history //
    let history2 ={
      accountFundedById:user6[0].Id,
      accountFundedByName:`${user6[0].FirstName} ${user6[0].LastName}`,
      amountRecieved:this.toSendTo.amount,
      time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
      date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
      
      }
      this.user2[0].recievedHistory.push(history2)
    // reciever history ends //

    let user3 = this.user.find((info:any)=>(info.Id==this.userId))
    let user12 = this.user.find((info:any)=>(this.toSendTo.accountNumber==info.accountNumber))
    let user4 =this.user.indexOf(user3)
    let user13 =this.user.indexOf(user12)
    this.user[user13]=this.user2[0]
    this.user[user4]=user6[0]
    let user5 = JSON.stringify(this.user)
    localStorage.setItem('USERS',user5)
    this.toSendTo={
      name:'',
      accountNumber:'',
      amount:'',
      pin:'',
      token:''
  
    }

 window.location.reload()
  }

// transfer money ends //

//show sending Through Main Account 
showDirect(){
  this.toSendTo={
    name:'',
    accountNumber:'',
    amount:'',
    pin:'',
    token:''

  }
this.transferFrom='Account'
this.pageToShow='Detail'
 
} 
// show sending through main acccount ends//

//show sending through wallets
showWallet(){
  this.toSendTo={
    name:'',
    accountNumber:'',
    amount:'',
    pin:'',
    token:''

  }
this.transferFrom='Wallet'
this.pageToShow='Detail'

} 

//show sending through wallet ends//
/////
/////
// THE FUNCTIONS FOR SENDING MONEY THROUGH ACCOUNT ENDS HERE
//
//THE FUNCTIONS FOR SENDING MONEY THROUGH WALLETS START HERE 
/////
//////

// accepting wallet details 
userDetail(val:any){
this.Wuser3=this.user.filter((info:any)=>(info.Id == val))
  this.toSendTo.name=`${this.Wuser3[0].FirstName} ${this.Wuser3[0].LastName}`
  this.toSendTo.accountNumber=this.Wuser3[0].accountNumber
}

// accepting wallet details ends

// collect sender details//
setDetails2(){
  if(this.toSendTo.amount[0]=='-')return
  if(this.toSendTo.name =='' || this.toSendTo.accountNumber =='' || this.toSendTo.amount =='') return
  this.Wuser4 = this.Wuser2.filter((info:any)=>(info.Id == this.opValue))
  this.user2 = this.user.filter((info:any)=>(this.toSendTo.accountNumber==info.accountNumber))
 this.pageToShow='Pin'
 
}
// collect details ends//

// confirm pin code //

setPin2(){
  if(this.toSendTo.pin !== this.Wuser[0].Password)return
  this.pageToShow='Token'
  this.token = Math.floor(Math.random() * 879927)

}

// confirm pin code ends //

// transfer money now //

transferNow2(){
  if(Number(this.toSendTo.token) !== this.token) return
  
  // deducting money from the owner account 
  let Wuser5 = this.Wuser4[0].amount
  if(Number(Wuser5)<Number(this.toSendTo.amount))return
  let Wuser6 = Number(Wuser5)-Number(this.toSendTo.amount)
  this.Wuser4[0].amount = Wuser6
  // deducting money from the money ends//
  
  // sending money to the account Number//
  let Wuser8 = this.user.filter((info:any)=>(this.toSendTo.accountNumber==info.accountNumber))
  let user9 = Wuser8[0].accountBalance
  let user10 = Number(user9)+Number(this.toSendTo.amount)
  Wuser8[0].accountBalance=user10
  //sending money to the account Number ends here //
  
  //HISTORY//
  
  // sender historyyy//
  let t = new Date()
 
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let history ={
  accountFundedId:this.Wuser3[0].Id,
  accountFundedName:`${this.Wuser3[0].FirstName} ${this.Wuser3[0].LastName}`,
  amountSent:this.toSendTo.amount,
  time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
  date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
  
  }
  this.Wuser4[0].transferhistory.push(history)
  // sender history ends//

  // reciever history //
  let history2 ={
    accountFundedById:this.Wuser[0].Id,
    accountFundedByName:`${this.Wuser[0].FirstName} ${this.Wuser[0].LastName}`,
    amountRecieved:this.toSendTo.amount,
    time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
    date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
    
    }
     
    this.Wuser3[0].recievedHistory.push(history2)
    let msg=`${this.Wuser[0].FirstName} ${this.Wuser[0].LastName} just credited your account`
    this.user2[0].notification.push(msg)
  // reciever history ends //

  let user3 = this.user.find((info:any)=>(info.Id==this.userId))
  let user12 = this.user.find((info:any)=>(this.toSendTo.accountNumber==info.accountNumber))
  let user4 =this.user.indexOf(user3)
  let user13 =this.user.indexOf(user12)
  this.user[user13]=this.user2[0]
  this.user[user4]=this.Wuser[0]
  let user5 = JSON.stringify(this.user)
  localStorage.setItem('USERS',user5)
  this.toSendTo={
    name:'',
    accountNumber:'',
    amount:'',
    pin:'',
    token:''

  }
  window.location.reload()
}

// transfer money ends //


}
