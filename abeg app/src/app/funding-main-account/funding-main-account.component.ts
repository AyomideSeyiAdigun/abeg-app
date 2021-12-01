import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funding-main-account',
  templateUrl: './funding-main-account.component.html',
  styleUrls: ['./funding-main-account.component.css']
})
export class FundingMainAccountComponent implements OnInit {

  constructor() { }
public userId:any=""
public totalAmount:any=''
public wallet:any={
  fund:'',
  cardname:'',
  cardnumber:'',
  pin:'',
  cvv:''
}
  ngOnInit(): void {
    this.userId = localStorage.getItem('IDCODE')
    this.userId=JSON.parse(this.userId)
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
   this.totalAmount= user2[0].accountBalance
  }

  addFund(){
    let fund:any = this.wallet.fund
    fund = JSON.stringify(fund)
    if(fund[0]=='-')return
    let user:any= localStorage.getItem('USERS') 
    user=JSON.parse(user)
    let user2 = user.filter((info:any)=>(info.Id==this.userId))
   // funding main account//
    let user6= user2[0].accountBalance
    let user7 = Number(user6)+ Number(this.wallet.fund)
    user2[0].accountBalance= user7
    // funding main account ends//

    // adding history to recieve history //
    let user8 =user2[0].recievedHistory
    let t = new Date()
    let time =`${ t.getHours }: ${t.getMinutes}:${t.getSeconds}`
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]}`
    let history ={
    accountFunded:this.userId[0],
    amountFunded:this.wallet.fund,
    cardName:this.wallet.cardname,
    time :`${ t.getHours() }: ${t.getMinutes()}:${t.getSeconds()}`,
    date : `${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]},${t.getFullYear()}`
    
    }
    user8.push(history)
    // adding history left//

    let user3 = user.find((info:any)=>(info.Id==this.userId))
    let user4 =user.indexOf(user3)
    user[user4]=user2[0]
    let user5 = JSON.stringify(user)
    localStorage.setItem('USERS',user5)
   this. wallet={
      fund:'',
      cardname:'',
      cardnumber:'',
      pin:'',
      cvv:''
   }
    this.ngOnInit()
  }

}
