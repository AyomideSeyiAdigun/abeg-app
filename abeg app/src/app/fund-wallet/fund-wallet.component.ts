import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-wallet',
  templateUrl: './fund-wallet.component.html',
  styleUrls: ['./fund-wallet.component.css']
})
export class FundWalletComponent implements OnInit {
@Input() walletToBeFundedId:any=''
  constructor() { }
  public userId:any=''
  public userWallet:any=''
  public amountToFund:any=''
  public personTotalMoney:any=''
  ngOnInit(): void {
    this.userId=localStorage.getItem('IDCODE')
    this.userId=JSON.parse(this.userId)
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    let user3 =user2[0].wallets
    let user4 = user3.filter((info:any)=>(info.Id == this.walletToBeFundedId))
    this.userWallet=user4[0]
    this.personTotalMoney=user2[0].accountBalance

  }

  addMoreFund(){
    if(this.amountToFund[0]=='-')return
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
    let user3 =user2[0].wallets
    // funding a particular wallet//
    let user4 = user3.filter((info:any)=>(info.Id == this.walletToBeFundedId))
    if(Number(user4[0].amount) < Number(this.amountToFund))return
    let user5 = Number(user4[0].amount) + Number(this.amountToFund)
    user4[0].amount=user5
    let user6 = user.find((info:any)=>(info.Id==this.userId))
    let user7 =user.indexOf(user3)

    // funding ends//

    // deducting from main account balance//
    let user9 =user2[0].accountBalance
    user9= Number(user9)-Number(this.amountToFund)
    user2[0].accountBalance=user9
    // deduction ends//

    // sending history of the account funded to the owner main's account//
        // main account history
    let user10 =user2[0].transferHistory
    let t = new Date()
    let time =`${ t.getHours }: ${t.getMinutes}:${t.getSeconds}`
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]}`
    let history ={
    accountFundedId:user4[0].Id,
    accountFundedName:user4[0].name,
    amountFunded:this.amountToFund,
    time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
    date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
    
    }
    user10.push(history)
      //main account end//

      // wallet history//
      let history2 ={
        accountFundedId:this.userId[0],
        amountFunded:this.amountToFund,
        time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
        date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
        
        }
        user4[0].recievedhistory.push(history2)

    // sending history ends //
    
    
    user[user7]=user2[0]
    let user8 = JSON.stringify(user)
    localStorage.setItem('USERS',user8)
    this.amountToFund=''
     this.ngOnInit()
  }

}
