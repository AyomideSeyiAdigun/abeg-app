import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw-fund-page',
  templateUrl: './withdraw-fund-page.component.html',
  styleUrls: ['./withdraw-fund-page.component.css']
})
export class WithdrawFundPageComponent implements OnInit {
@Input() walletToBeFundedId:any
  constructor() { }
  public amountToWithdraw:any
  public userId:any 
  public user:any
  public loggedUser:any
  public personTotalMoney:any
  public walletToFund:any
  public userWallet:any={
    amount:''
  }
  ngOnInit(): void {
    this.userId=localStorage.getItem('IDCODE')
    this.userId=JSON.parse(this.userId)
    this.user=localStorage.getItem('USERS')
    this.user=JSON.parse(this.user)
    this.loggedUser=this.user.filter((info:any)=>(info.Id==this.userId))
    this.personTotalMoney=this.loggedUser[0].accountBalance
    //
    this.walletToFund=this.loggedUser.map((info:any)=>(info.wallets))
   
    this.walletToFund=this.walletToFund[0].filter((info:any)=>(info.Id == this.walletToBeFundedId))
  
    this.userWallet.amount=this.walletToFund[0].amount


  }

  withdrawFund(){
    if (this.amountToWithdraw[0]=='-')return
    if( Number(this.walletToFund[0].amount)<Number(this.amountToWithdraw))return
    // deducting from wallet account//
    this.walletToFund[0].amount= Number(this.walletToFund[0].amount)-Number(this.amountToWithdraw)
    // deducting from wallet account endsss//

    // adding to main account balance //
    this.loggedUser[0].accountBalance = Number(this.loggedUser[0].accountBalance)+Number(this.amountToWithdraw)
    // adding to main account balance  enndsss//

    // sending it to main account history//

    let t = new Date()
 
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let history ={
  accountFundedById:this.walletToFund[0].Id,
  accountFundedByName:this.walletToFund[0].name,
  amountSent:this.userWallet.amount,
  time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
  date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
  
  }

  this.loggedUser[0].recievedHistory.push(history)
  
  //sending history to main account ennddss//

  // sending history to the wallet //
  let history2 ={
    accountFundedId:'Main Account',
    accountFundedName:'Main Account',
    amountSent:this.userWallet.amount,
    time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
    date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
    
    }
    this.walletToFund[0].transferhistory.push(history2)

    // sending history to wallet ends//

    let logUser=this.user.find((info:any)=>(info.Id==this.userId))
    let logUser2= this.user.indexOf(logUser)
    this.user[logUser2]=this.loggedUser[0]
    let log =JSON.stringify(this.user)
    localStorage.setItem('USERS',log)
    this.amountToWithdraw=''
    this.ngOnInit()

  }
}
