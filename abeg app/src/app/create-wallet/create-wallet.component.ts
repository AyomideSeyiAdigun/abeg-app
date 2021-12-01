
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.css']
})
export class CreateWalletComponent implements OnInit {

  constructor() { }
  public userId:any = ''
  public totalAmount:any =''
  public wallet:any ={
    name:'',
    amount:'',
    transferhistory:[],
    recievedhistory:[],
    Id:Math.floor(Math.random() * 1747505) 
  }
  ngOnInit(): void {
    this.userId = localStorage.getItem('IDCODE')
    this.userId=JSON.parse(this.userId)
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
   this.totalAmount= user2[0].accountBalance
  }
  walletcreated(){  
    if(this.totalAmount=='000')return   
    if(this.wallet.amount[0]=='-')return
    if(this.wallet.name =='' || this.wallet.amount =='')return
     let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
   
    let user6= user2[0].accountBalance
    let user7 = Number(user6)- Number(this.wallet.amount)
    user2[0].accountBalance= user7

    // sending amount sent from the main account to the wallet created//
      //this history is going to the main account history//
    let user8 =user2[0].transferHistory
    let t = new Date()
    let time =`${ t.getHours }: ${t.getMinutes}:${t.getSeconds}`
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]}`
    let history ={
    accountFundedId:this.wallet.Id,
    accountFundedName:this.wallet.name,
    amountFunded:this.wallet.amount,
    time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
    date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
    
    }
    user8.push(history)
        // main account history ends here
      
        // this history is going to the wallet accoun//
        let history2 ={
          accountFunded:this.userId[0],
          amountFunded:this.wallet.amount,
          time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
          date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
          
          }
          this.wallet.recievedhistory.push(history2)
        //wallet account gistory ends//


    // sending amount.sent ends//


    // creating a new wallet //
    user2[0].wallets.push(this.wallet)
      // creating a new wallet ends here //
      
    let user3 = user.find((info:any)=>(info.Id==this.userId))
    let user4 =user.indexOf(user3)
    user[user4]=user2[0]
    let user5 = JSON.stringify(user)
    localStorage.setItem('USERS',user5)
    this.wallet.name=''
    this.wallet.amount=''
    window.location.reload()

  }
}
